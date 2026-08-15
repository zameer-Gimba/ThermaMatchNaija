import React from 'react';

export default function MetricCard({ title, value, unit, description, colorClass }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
      <div className="mt-2 flex items-baseline">
        <span className={`text-3xl font-bold tracking-tight ${colorClass || 'text-slate-900'}`}>
          {value}
        </span>
        {unit && <span className="ml-1 text-sm font-semibold text-slate-500">{unit}</span>}
      </div>
      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}
