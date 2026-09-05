'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Loader2, 
  AlertCircle, 
  FileCheck, 
  Building, 
  Mail, 
  User 
} from 'lucide-react';
import { SERVICES } from '@/lib/data';

interface ContactFormProps {
  preselectedService?: string;
  className?: string;
  compact?: boolean;
}

export default function ContactForm({ preselectedService, className = '', compact = false }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Website Development']
  );
  const [budget, setBudget] = useState('$15,000 - $35,000');
  const [timeline, setTimeline] = useState('1 - 3 Months');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    inquiryId: string;
    message: string;
  } | null>(null);

  const budgetOptions = [
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000 - $75,000',
    '$75,000+',
    'Flexible / Discovery',
  ];

  const timelineOptions = [
    'Immediate (< 1 Month)',
    '1 - 3 Months',
    '3 - 6 Months',
    'Flexible Exploration',
  ];

  const toggleService = (serviceTitle: string) => {
    if (selectedServices.includes(serviceTitle)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== serviceTitle));
      }
    } else {
      setSelectedServices([...selectedServices, serviceTitle]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          services: selectedServices,
          budget,
          timeline,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setSuccessData({
        inquiryId: data.inquiryId,
        message: data.message,
      });

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#3b82f6', '#18181b', '#f59e0b'],
        });
      } catch {
        // Safe fallback if confetti isn't supported
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setSuccessData(null);
    setError(null);
  };

  if (successData) {
    return (
      <div className={`p-8 md:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-emerald-500/30 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200 ${className}`}>
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold">
            Inquiry Ref: #{successData.inquiryId}
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Inquiry Dispatched Successfully!
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
            {successData.message}
          </p>
        </div>

        {/* Breakdown Card */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-700">
            <span className="text-zinc-500">Selected Capabilities:</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">{selectedServices.join(', ')}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-zinc-200 dark:border-zinc-700">
            <span className="text-zinc-500">Estimated Budget:</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">{budget}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-zinc-500">Target Timeline:</span>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">{timeline}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Submit Another Project Inquiry
          </button>
          <a
            href="mailto:contact@corelixsystems.com"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Email Support</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6 ${className}`}
      id="corelix-project-inquiry-form"
    >
      {/* Header */}
      <div className="space-y-1.5">
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
          Let’s discuss your technical vision
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          Select your required capabilities and project parameters. We will review and provide an architecture estimate within 4 hours.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Step 1: Services Selection */}
      <div className="space-y-2.5">
        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-mono">
          1. Select Required Services (Multi-Select)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SERVICES.map((service) => {
            const isSelected = selectedServices.includes(service.title);
            return (
              <button
                type="button"
                key={service.id}
                onClick={() => toggleService(service.title)}
                className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all border flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-500 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-500/70 dark:text-emerald-200 shadow-xs'
                    : 'bg-zinc-50/50 border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:bg-zinc-800/40 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold">{service.title.split('&')[0]}</span>
                  <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                    isSelected ? 'bg-emerald-500 text-white font-bold' : 'border border-zinc-400'
                  }`}>
                    {isSelected && '✓'}
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                  {service.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Budget */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-mono">
            2. Estimated Budget Range
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-mono">
            3. Desired Delivery Timeline
          </label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
          >
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 3: Contact Details */}
      <div className="space-y-3 pt-2">
        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-mono">
          4. Your Details & Scope Brief
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-3 py-2.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="relative">
            <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
            <input
              type="email"
              required
              placeholder="Work Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-3 py-2.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="relative">
            <Building className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-3 py-2.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="relative">
          <textarea
            required
            rows={compact ? 3 : 4}
            placeholder="Describe your project goals, target audience, technical requirements, or key challenges... *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl p-3.5 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Trust assurance & Submit CTA */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <FileCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Strict Non-Disclosure Agreement (NDA) Protected</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer active:scale-[0.98]"
          id="submit-inquiry-btn"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing & Dispatching...</span>
            </>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
