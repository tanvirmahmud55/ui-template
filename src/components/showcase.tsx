"use client";

import { useState } from "react";
import {
  Sparkles,
  Check,
  Bell,
  Sliders,
  Heart,
  Eye,
  Cpu,
} from "lucide-react";

export function Showcase() {
  const [buttonState, setButtonState] = useState<"idle" | "loading" | "success">("idle");
  const [sliderVal, setSliderVal] = useState(75);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(342);

  const handleSimulateClick = () => {
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");
      setTimeout(() => setButtonState("idle"), 2000);
    }, 800);
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    } else {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    }
  };

  return (
    <section id="showcase" className="py-20 bg-slate-50/50 dark:bg-slate-950/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMPONENT SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed for interaction and finesse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Interact with live UI primitives built with clean React 19 state and Tailwind CSS utilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Interactive Micro-States */}
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Micro-interactions
                </span>
                <Sliders className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Dynamic Action Buttons
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Test stateful button micro-interactions with smooth loading spinners and confirmation ticks.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleSimulateClick}
                disabled={buttonState === "loading"}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  buttonState === "idle"
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30"
                    : buttonState === "loading"
                    ? "bg-indigo-400 text-white cursor-wait"
                    : "bg-emerald-600 text-white"
                }`}
              >
                {buttonState === "idle" && (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Click to Simulate Action</span>
                  </>
                )}
                {buttonState === "loading" && (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Request...</span>
                  </>
                )}
                {buttonState === "success" && (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Completed Successfully!</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    liked
                      ? "border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      liked ? "fill-rose-500 text-rose-500" : "text-slate-400"
                    }`}
                  />
                  <span>{likesCount}</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Eye className="w-3.5 h-3.5" />
                  <span>1.4k views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Controls / Sliders */}
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  Controls & Form
                </span>
                <Sliders className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Live Parameter Tuner
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Reactive sliders and live feedback calculations designed for administrative interfaces.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                  <span>Bandwidth Threshold</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {sliderVal}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Estimated throughput
                  </span>
                </div>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  {(sliderVal * 1.84).toFixed(1)} GB/s
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Real-Time Notification Toast Simulation */}
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Alerts & Badges
                </span>
                <Bell className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Toast & Feed System
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Integrated notification badges and status pills with accessible semantics.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-300">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="truncate">Production deployment succeeded</span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-lg border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 text-xs text-indigo-800 dark:text-indigo-300">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="truncate">Turbo cache hit: 98.4% saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
