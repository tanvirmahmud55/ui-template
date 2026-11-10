import { TrendingUp, Users, Star, Zap } from "lucide-react";

export function Stats() {
  const stats = [
    {
      id: "developers",
      value: "25,000+",
      label: "Developers Building",
      sublabel: "Across 140+ countries",
      icon: Users,
    },
    {
      id: "lighthouse",
      value: "100/100",
      label: "Lighthouse Performance",
      sublabel: "Perfect accessibility & SEO",
      icon: Zap,
    },
    {
      id: "reviews",
      value: "4.95 / 5",
      label: "User Satisfaction",
      sublabel: "From 3,200+ verified ratings",
      icon: Star,
    },
    {
      id: "latency",
      value: "< 45ms",
      label: "Edge Rendering Latency",
      sublabel: "Globally distributed CDN",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="metrics" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xs text-center flex flex-col items-center hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 font-semibold text-sm text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
