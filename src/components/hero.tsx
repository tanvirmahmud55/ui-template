"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  TrendingUp,
  Activity,
  Zap,
  Shield,
  Layers,
  Terminal,
} from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const copyCommand = () => {
    navigator.clipboard.writeText("npx create-aura-app@latest my-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[500px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-400/15 blur-3xl -z-10 pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Release Badge */}
          <Link
            href="#features"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200/80 dark:border-indigo-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xs text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors shadow-xs mb-8 group"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Next.js 16 Ready
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Explore the modern component suite
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all" />
          </Link>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Build stunning web apps{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              at lightspeed
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10">
            A production-ready UI template crafted with Next.js App Router,
            Tailwind CSS, and TypeScript. Beautifully animated, accessible by
            default, and ready to scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <Link
              href="#get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-98 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors shadow-xs"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Explore Features</span>
            </Link>
          </div>

          {/* Quick Copy Command */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300 shadow-inner max-w-md w-full justify-between mb-16">
            <div className="flex items-center gap-2 truncate">
              <Terminal className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span className="truncate">$ npx create-aura-app@latest my-app</span>
            </div>
            <button
              onClick={copyCommand}
              className="flex items-center gap-1.5 px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-[11px] font-sans font-medium text-slate-700 dark:text-slate-300 transition-colors shrink-0"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Interactive App Mockup / Card */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-medium text-slate-400">aura-workspace // dashboard</span>
            </div>

            {/* Mockup Tabs */}
            <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-800/60 p-0.5 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === "preview"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Dashboard Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === "code"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Component Code
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 md:p-8">
            {activeTab === "preview" ? (
              <div className="space-y-6">
                {/* Stats Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Monthly Active Users
                      </span>
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      128,430
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>+14.8%</span>
                      <span className="text-slate-400 font-normal">vs last month</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Average Response
                      </span>
                      <Zap className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      42ms
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>-18ms</span>
                      <span className="text-slate-400 font-normal">ultra low latency</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        System Uptime
                      </span>
                      <Activity className="w-4 h-4 text-indigo-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      99.99%
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>Zero incidents</span>
                      <span className="text-slate-400 font-normal">this quarter</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Security Audits
                      </span>
                      <Shield className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      Grade A+
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      <span>SOC2 & HIPAA</span>
                      <span className="text-slate-400 font-normal">compliant</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                          Traffic & Engagement Velocity
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Real-time stream across global edge nodes
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        Live 60 fps
                      </span>
                    </div>

                    {/* CSS Bar Chart Simulation */}
                    <div className="h-36 flex items-end justify-between gap-2 pt-4">
                      {[40, 65, 52, 78, 62, 85, 95, 75, 88, 92, 100, 84].map(
                        (val, index) => (
                          <div
                            key={index}
                            className="w-full bg-slate-100 dark:bg-slate-900 rounded-t-sm h-full flex items-end group"
                          >
                            <div
                              style={{ height: `${val}%` }}
                              className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm transition-all duration-500 group-hover:from-purple-500 group-hover:to-pink-500"
                              title={`Value: ${val}`}
                            />
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>23:59</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
                        Recent Deployments
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                        Automatic production deploys
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">
                              v1.4.2 (main)
                            </span>
                          </div>
                          <span className="text-slate-400">12m ago</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">
                              feat/dark-mode
                            </span>
                          </div>
                          <span className="text-slate-400">2h ago</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">
                              refactor/tailwind-v4
                            </span>
                          </div>
                          <span className="text-slate-400">5h ago</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                      <span>Status: All Healthy</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto">
                <pre>
                  <code>{`// Example: Using the modern UI Card component
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function FeaturePreview() {
  return (
    <Card className="hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-gradient">Next-Gen Speed</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Built with Turbopack, React 19, and Tailwind v4.</p>
        <ThemeToggle />
      </CardContent>
    </Card>
  );
}`}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof Partners Strip */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
            Engineered with modern industry standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-slate-500 dark:text-slate-400 text-sm font-semibold">
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">NEXT.JS 16</span>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">REACT 19</span>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">TAILWIND CSS 4</span>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">TYPESCRIPT 5</span>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">TURBOPACK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
