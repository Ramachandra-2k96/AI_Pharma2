"use client"

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, Send, Image as ImageIcon, StopCircle, Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognition = any;

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [conversations, setConversations] = useState<string[]>(['Conversation 1', 'Conversation 2']);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<number | null>(null);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }

    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        content: input,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          content: "This is a simulated AI response.",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setInput((prevInput) => prevInput + `\n[Image: ${base64String}]`);
      };
      reader.readAsDataURL(file);
    }
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
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        setInput(transcript);
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
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <Button onClick={handleNewConversation} className="w-full mb-4">New Conversation</Button>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {conversations.map((conversation, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start mb-2 text-gray-800"
                onClick={() => handleConversationSelect(conversation)}
              >
                {conversation}
              </Button>
            ))}
          </ScrollArea>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.isUser ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </div>
              {!message.isUser && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-1"
                  onClick={() => handleTextToSpeech(message.id, message.content)}
                >
                  {isSpeaking === message.id ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 text-gray-800"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              <ImageIcon className="h-5 w-5" />
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <Button onClick={handleMicClick}>
              {isRecording ? (
                <StopCircle className="h-5 w-5 text-red-500" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>
            <Button onClick={handleSend}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}