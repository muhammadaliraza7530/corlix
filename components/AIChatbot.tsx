'use client';

import { useState } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';

type ChatMessage = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi! I can help with Corelix services, pricing guidance, and the best digital solution for your business. Ask me anything.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const nextMessages = [
      ...messages,
      { id: Date.now(), role: 'user' as const, text: userMessage },
    ];

    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to get response.');
      }

      setMessages([
        ...nextMessages,
        { id: Date.now() + 1, role: 'assistant', text: data.answer || 'I could not generate a response right now.' },
      ]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          id: Date.now() + 2,
          role: 'assistant',
          text:
            error instanceof Error
              ? error.message
              : 'Something went wrong. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2084ba] text-white shadow-[0_18px_40px_rgba(32,132,186,0.45)] transition-transform duration-200 hover:scale-105"
        aria-label="Open AI assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(92vw,360px)] overflow-hidden rounded-[28px] border border-white/10 bg-[#0f172a]/90 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#111827] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2084ba]/20 text-[#7dd3fc]">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Corelix AI</p>
                <p className="text-[10px] text-zinc-400">Gemini-powered assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Close chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex max-h-[420px] min-h-[360px] flex-col">
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-[#2084ba] text-white'
                        : 'bg-white/5 text-zinc-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white/5 px-3 py-2 text-sm text-zinc-300">
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 bg-[#0b1220] p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask about services or pricing..."
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:border-[#2084ba] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2084ba] text-white transition hover:bg-[#1a6fa2] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
