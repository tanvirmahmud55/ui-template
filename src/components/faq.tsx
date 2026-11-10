"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I customize the theme and brand colors?",
    answer:
      "All colors are defined using CSS custom properties in `src/app/globals.css` and Tailwind v4 themes. You can easily tweak `--background`, `--foreground`, and the indigo/purple gradient shades to match your brand palette in seconds.",
  },
  {
    question: "Is this template fully compatible with Next.js 16 and React 19?",
    answer:
      "Yes! The template is built using Next.js 16 App Router, React 19, Turbopack, and Tailwind CSS v4. It features zero legacy dependencies and takes full advantage of modern server/client component boundaries.",
  },
  {
    question: "How does the dark mode toggle prevent hydration flickers?",
    answer:
      "Dark mode is powered by `next-themes` with `attribute=\"class\"` and `suppressHydrationWarning` on the `<html>` element. The theme script runs inline before rendering, completely preventing any flash of unstyled content (FOUC).",
  },
  {
    question: "Can I use this template for commercial or client projects?",
    answer:
      "Yes, absolutely. The project is licensed under the permissive MIT License, giving you complete freedom to use it in personal, open-source, or commercial production projects without attribution requirements.",
  },
  {
    question: "Where can I deploy this project?",
    answer:
      "Because it's a standard Next.js App Router project, you can deploy it seamlessly with one click on Vercel, Netlify, AWS Amplify, Cloudflare Pages, Railway, or as a standalone Docker container.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Got questions? We have answers.
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 transition-colors overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
