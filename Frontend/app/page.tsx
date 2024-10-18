import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Welcome to AI Chat</h1>
        <p className="text-xl text-white mb-8">Experience the future of conversation</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/chat">Go to Chat</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}