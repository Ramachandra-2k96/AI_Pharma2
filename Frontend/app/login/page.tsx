"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic here (omitted for brevity)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="p-8 bg-white rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-gray-700">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="text-gray-800"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-gray-800"
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}