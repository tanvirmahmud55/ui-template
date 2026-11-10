"use client";

import { useState } from "react";
import {
  Zap,
  Moon,
  Smartphone,
  ShieldCheck,
  Code2,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: typeof Zap;
  color: string;
  badge: string;
  category: "core" | "design" | "perf";
}

const features: Feature[] = [
  {
    id: "turbopack",
    title: "Instant Fast Refresh",
    description:
      "Powered by Next.js 16 and Turbopack. Lightning fast hot module reloading and optimized server-side rendering for effortless developer velocity.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    badge: "Turbopack",
    category: "perf",
  },
  {
    id: "dark-mode",
    title: "Intelligent Dark Mode",
    description:
      "Seamless system detection with flicker-free hydration. Includes smooth transitions, custom accent tones, and persistent user preferences.",
    icon: Moon,
    color: "from-indigo-500 to-purple-600",
    badge: "Flicker-Free",
    category: "design",
  },
  {
    id: "responsive",
    title: "Fluid Responsive Design",
    description:
      "Carefully calibrated layouts crafted for mobile phones, tablets, laptops, and ultra-wide screens with zero layout shifts.",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-600",
    badge: "Mobile-First",
    category: "design",
  },
  {
    id: "tailwind-4",
    title: "Tailwind CSS v4 Native",
    description:
      "Harness the next generation of CSS with native variables, zero configuration setup, lightning compilation, and modern CSS color spaces.",
    icon: Palette,
    color: "from-cyan-500 to-blue-600",
    badge: "v4.0 Ready",
    category: "core",
  },
  {
    id: "typescript",
    title: "Strict TypeScript Safety",
    description:
      "End-to-end typed components with strict TypeScript configuration, IntelliSense autocomplete, and rock-solid prop validation.",
    icon: Code2,
    color: "from-violet-500 to-fuchsia-600",
    badge: "Type-Safe",
    category: "core",
  },
  {
    id: "accessible",
    title: "Enterprise Accessibility",
    description:
      "Built conforming to WCAG 2.1 standards. Complete keyboard navigation, ARIA attributes, and high-contrast color ratios out of the box.",
    icon: ShieldCheck,
    color: "from-rose-500 to-pink-600",
    badge: "WCAG 2.1",
    category: "core",
  },
];

export function Features() {
  const [activeCategory, setActiveCategory] = useState<"all" | "core" | "design" | "perf">("all");

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((item) => item.category === activeCategory);

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything you need to ship{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              world-class software
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A cohesive collection of carefully engineered primitives, layouts, and patterns designed to get your project off the ground in minutes.
          </p>

          {/* Filter Chips */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Features" },
              { id: "core", label: "Core Foundation" },
              { id: "design", label: "UI & Design" },
              { id: "perf", label: "Performance" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white shadow-md shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Micro-link */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span className="group-hover:underline underline-offset-4">
                    Explore docs
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
