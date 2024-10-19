"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [focusedInput, setFocusedInput] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const calculatePasswordStrength = (pass : any) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleSignUp = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post("https://5e75-2409-40f2-3013-7583-b73a-d6e8-629-5345.ngrok-free.app/api/signup/", {
        username,
        email,
        password,
      });

      toast({
        title: "Welcome aboard! ✨",
        description: "Your account has been successfully created.",
      });
      router.push("/login");
    } catch (error : any) {
      const errorMessage = error.response?.data.detail || "Sign up failed. Please try again.";
      toast({
        title: "Oops! Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 transform hover:scale-[1.01] transition-all duration-300">
          {/* Floating sparkles icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-full p-3 animate-bounce">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          {/* Header with gradient text */}
          <div className="text-center space-y-2 pt-4">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Join Us
            </h1>
            <p className="text-sm text-white/80">Create your account to get started</p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2 transform transition-all duration-200 ease-in-out">
              <Label htmlFor="username" className="text-sm font-medium text-white">
                Username
              </Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className={`h-5 w-5 transition-colors duration-200 ${
                    focusedInput === 'username' ? 'text-purple-300' : 'text-white'
                  }`} />
                </div>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setFocusedInput('username')}
                  onBlur={() => setFocusedInput('')}
                  className="pl-10 w-full h-11 bg-white/10 text-white border-white/20 hover:border-white/40 focus:border-purple-400 focus:ring-purple-400/20 placeholder-white transition-all duration-200"
                  placeholder="Choose your username"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2 transform transition-all duration-200 ease-in-out">
              <Label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 transition-colors duration-200 ${
                    focusedInput === 'email' ? 'text-purple-300' : 'text-white/60'
                  }`} />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput('')}
                  className="pl-10 w-full h-11 bg-white/10 text-white border-white/20 hover:border-white/40 focus:border-purple-400 focus:ring-purple-400/20 placeholder-white transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 transform transition-all duration-200 ease-in-out">
              <Label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`h-5 w-5 transition-colors duration-200 ${
                    focusedInput === 'password' ? 'text-purple-300' : 'text-white/60'
                  }`} />
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    calculatePasswordStrength(e.target.value);
                  }}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput('')}
                  className="pl-10 w-full h-11 bg-white/10 text-white border-white/20 hover:border-white/40 focus:border-purple-400 focus:ring-purple-400/20 placeholder-white transition-all duration-200"
                  placeholder="Create a strong password"
                  required
                />
              </div>

              {/* Password Strength Indicator */}
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-full rounded-full transition-all duration-500 ${
                        i < passwordStrength
                          ? i < 2
                            ? 'bg-red-400'
                            : i < 3
                              ? 'bg-yellow-400'
                              : 'bg-green-400'
                          : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <CheckCircle2 className={`w-4 h-4 ${passwordStrength >= 4 ? 'text-green-400' : 'text-white'}`} />
                  {passwordStrength < 2 ? 'Weak' : passwordStrength < 3 ? 'Medium' : passwordStrength < 4 ? 'Strong' : 'Very Strong'}
                </div>
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="pt-4 text-center">
            <button
              onClick={() => router.push("/login")}
              className="text-sm text-white hover:text-white transition-colors duration-200 hover:underline decoration-purple-400 underline-offset-4"
            >
              Already have an account? Sign In
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}