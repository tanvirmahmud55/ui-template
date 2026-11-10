"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        aria-label="Toggle theme"
        title={`Current: ${theme} mode`}
      >
        <span className="sr-only">Toggle theme</span>
        {isDark ? (
          <Moon className="w-4 h-4 text-indigo-400 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
              className={`flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium transition-colors ${
                theme === "light"
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light</span>
              {theme === "light" && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              )}
            </button>

            <button
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
              className={`flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium transition-colors ${
                theme === "dark"
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dark</span>
              {theme === "dark" && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              )}
            </button>

            <button
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
              className={`flex items-center gap-2.5 w-full px-3 py-2 text-xs font-medium transition-colors ${
                theme === "system"
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Laptop className="w-3.5 h-3.5 text-slate-500" />
              <span>System</span>
              {theme === "system" && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
