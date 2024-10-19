"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, Send, Image as ImageIcon, StopCircle, Volume2, VolumeX, Menu } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Cookies from 'js-cookie';
import router from 'next/router';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
  images?: string[]; 
}
type SpeechRecognition = any;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [conversations, setConversations] = useState<string[]>(['Conversation1']);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility on mobile
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const websocketRef = useRef<WebSocket | null>(null);
  const [selectedImages, setSelectedImages] = useState<{ file: File; preview: string }[]>([]);
  const [tempTranscript, setTempTranscript] = useState('');
  // Load chat history when the component mounts
  useEffect(() => {
    const accessToken = Cookies.get("access");
    async function loadChatHistory() {
      try {
        const response = await fetch('/api/chat-history/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
    if (!accessToken) {
      router.push("/login");
    } else {
      loadChatHistory();
      }

  }, []);

  // Initialize WebSocket when component mounts
  useEffect(() => {
    const ws = new WebSocket('wss://5e75-2409-40f2-3013-7583-b73a-d6e8-629-5345.ngrok-free.app/ws/chat/');
    websocketRef.current = ws;
  
    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };
  
    ws.onmessage = (event) => {
      console.log("Message received from server:", event.data);
      try {
        const data = JSON.parse(event.data);
        const aiMessage: Message = {
          id: Date.now(),
          content: data.message,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Failed to parse message:", error);
      }
    };
  
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  
    ws.onclose = (event) => {
      console.error('WebSocket connection closed:', event);
    };
  
    return () => {
      console.log("Closing WebSocket connection");
      ws.close();
    };
  }, []); 

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }

    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
    }
  }, [messages]);

  // Modified handleSend function
  const handleSend = async () => {
    if (input.trim() || selectedImages.length > 0) {
      const base64Images: string[] = [];
      
      // Convert images to base64 and clean the strings
      if (selectedImages.length > 0) {
        for (const image of selectedImages) {
          const base64 = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              // Clean the base64 string by removing the data URL prefix
              const cleanBase64 = (reader.result as string).replace(/^data:image\/\w+;base64,/, '');
              resolve(cleanBase64);
            };
            reader.readAsDataURL(image.file);
          });
          base64Images.push(base64);
        }
      }
  
      const newMessage: Message = {
        id: Date.now(),
        content: input,
        isUser: true,
        timestamp: new Date(),
        images: base64Images.length > 0 ? base64Images : undefined,
      };
  
      setMessages([...messages, newMessage]);
      setInput('');
      setSelectedImages([]);
  
      // Send message via WebSocket
      if (websocketRef.current) {
        const payload = {
          message: input,
          ...(base64Images.length > 0 && { image_url: base64Images })
        };
        websocketRef.current.send(JSON.stringify(payload));
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setSelectedImages(prev => [...prev, ...newImages]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Add this new function to remove images
const handleRemoveImage = (index: number) => {
  setSelectedImages(prev => {
    const newImages = [...prev];
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    return newImages;
  });
};

  const handleMicClick = () => {
    if (!isRecording) {
      startSpeechToText();
    } else {
      stopSpeechToText();
    }
  };

  const startSpeechToText = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setInput(prevInput => prevInput + finalTranscript);
          setTempTranscript('');
        } else {
          setTempTranscript(interimTranscript);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        stopSpeechToText();
      };

      recognitionRef.current.start();
      setIsRecording(true);
      toast({
        title: "Recording started",
        description: "Speak now...",
      });
    } else {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });
    }
  };


  const stopSpeechToText = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      toast({
        title: "Recording stopped",
        description: "Speech converted to text.",
      });
    }
  };

  const handleNewConversation = () => {
    const newConversation = `Conversation ${conversations.length + 1}`;
    setConversations([...conversations, newConversation]);
    setSelectedConversation(newConversation);
    setMessages([]);
  };

  const handleConversationSelect = (conversation: string) => {
    setSelectedConversation(conversation);
    setMessages([]);  // Clear messages when switching conversations
    setSidebarOpen(false);  // Close sidebar after selecting conversation (on mobile)
  };

  const handleTextToSpeech = (messageId: number, content: string) => {
    if (synthRef.current) {
      if (isSpeaking === messageId) {
        synthRef.current.cancel();
        setIsSpeaking(null);
      } else {
        synthRef.current.cancel();
        const utterance = new SpeechSynthesisUtterance(content);
        utterance.onend = () => setIsSpeaking(null);
        synthRef.current.speak(utterance);
        setIsSpeaking(messageId);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block w-72 bg-white p-4 border-r border-gray-200 shadow-md rounded-l-3xl">
        <Button
          onClick={handleNewConversation}
          className="w-full mb-4 bg-blue-600 text-white rounded-lg shadow-md  hover:bg-blue-500 "
        >
          New Conversation
        </Button>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {conversations.map((conversation, index) => (
            <Button
              key={index}
              variant={selectedConversation === conversation ? "secondary" : "ghost"}
              className={`w-full justify-start mb-2 text-gray-800 rounded-lg ${
                selectedConversation === conversation
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100"
              }hover:bg-gray-100`}
              onClick={() => handleConversationSelect(conversation)}
            >
              {conversation}
            </Button>
          ))}
        </ScrollArea>
      </div>
  
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-72 h-full bg-white p-4 shadow-lg rounded-r-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={handleNewConversation}
              className="w-full mb-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500"
            >
              New Conversation
            </Button>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {conversations.map((conversation, index) => (
                <Button
                  key={index}
                  variant={selectedConversation === conversation ? "secondary" : "ghost"}
                  className={`w-full justify-start mb-2 text-gray-800 rounded-lg ${
                    selectedConversation === conversation
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleConversationSelect(conversation)}
                >
                  {conversation}
                </Button>
              ))}
            </ScrollArea>
          </div>
        </div>
      )}
  
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center p-4 border-b border-gray-200 bg-white shadow-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="mr-2"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">
            {selectedConversation || "Chat"}
          </h1>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 md:p-6 space-y-4" ref={scrollAreaRef}>
        {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}
            >
              <div className="max-w-[85%] md:max-w-[70%]">
                <div
                  className={`relative group rounded-3xl px-4 py-3 shadow-md ${
                    message.isUser
                      ? "bg-blue-500 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {message.content}
                  {message.images && message.images.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {message.images.map((image, index) => (
                          <img
                            key={index}
                            src={`data:image/jpeg;base64,${image}`}
                            alt={`Attached ${index + 1}`}
                            className="max-w-[200px] max-h-[200px] object-contain rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  {!message.isUser && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute -right-12 top-1/2 -translate-y-1/2 hover:bg-white-500"
                      onClick={() => handleTextToSpeech(message.id, message.content)}
                    >
                      {isSpeaking === message.id ? (
                        <VolumeX className="h-4 w-4 text-gray-600" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-gray-600" />
                      )}
                    </Button>
                  )}
                </div>
                <div className="text-xs text-gray-400 mt-1 px-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>

    <div className="w-full flex flex-wrap gap-2 mb-2">
      {selectedImages.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image.preview}
            alt="Preview"
            className="h-16 w-16 object-cover rounded-lg border border-gray-200"
          />
          <button
            onClick={() => handleRemoveImage(index)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hidden group-hover:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 shadow-md">
          <div className="max-w-screen-xl mx-auto flex items-center gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 min-h-[50px] max-h-[200px] bg-white text-gray-900 border-gray-200 placeholder:text-gray-500 resize-none rounded-lg shadow-md"
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className='bg-white hover:bg-gray-300'
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="h-5 w-5 text-gray-600 " />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden "
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleMicClick}
                className={`hover:bg-gray-300 ${isRecording ? "bg-red-50" : "bg-white"}`}
              >
                {isRecording ? (
                  <StopCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <Mic className="h-5 w-5 text-gray-600 " />
                )}
              </Button>
              <Button
                size="icon"
                onClick={handleSend}
                className="bg-blue-600 text-white rounded-full hover:bg-blue-600 "
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
