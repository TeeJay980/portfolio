import React from 'react';
import { Cpu, Code2, Database, Cloud, CheckCircle2 } from 'lucide-react';
import { SKILLS_MATRIX } from '../data/developerData';

export const SkillsMatrix = () => {
  const getCategoryIcon = (idx) => {
    switch (idx) {
      case 0: return <Code2 className="w-5 h-5 text-spex-volt" />;
      case 1: return <Database className="w-5 h-5 text-white" />;
      case 2: return <Cloud className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-spex-volt" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-20 relative bg-[#090A0D] border-t border-white/[0.08]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spex-surface border border-white/10 text-xs font-mono text-spex-muted mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-spex-volt" />
              CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              CORE TECH STACK
            </h2>
            <p className="text-spex-muted text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
              Selected technologies engineered for maximum throughput, low latency, and robust type safety.
            </p>
          </div>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7">
          {SKILLS_MATRIX.map((group, idx) => (
            <div
              key={idx}
              className="spex-card p-5 sm:p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group shadow-sm hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-spex-surface border border-white/10">
                    {getCategoryIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-spex-muted">Domain 0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-spex-volt transition-colors">
                  {group.category}
                </h3>
                <p className="text-xs text-spex-muted mt-1.5 leading-relaxed">
                  {group.description}
                </p>

                {/* Progress Bars */}
                <div className="mt-6 space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-spex-volt font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-spex-surface rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-spex-volt transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-spex-muted">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Tooling Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-spex-surface border border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-display font-black text-white">Next.js 15</div>
            <div className="text-xs text-spex-muted font-mono mt-0.5">App Router & RSC</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-black text-white">TypeScript</div>
            <div className="text-xs text-spex-muted font-mono mt-0.5">Strict Type Safety</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-black text-white">PostgreSQL</div>
            <div className="text-xs text-spex-muted font-mono mt-0.5">ACID Compliant DB</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-black text-white">Tailwind CSS</div>
            <div className="text-xs text-spex-muted font-mono mt-0.5">Modern Design System</div>
          </div>
        </div>

      </div>
    </section>
  );
};
