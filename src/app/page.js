'use client';

import './globals.css';
import React, { useState, useMemo } from 'react';
import { industrialProfiles } from '../data/dummyData';
import MetricCard from '../components/MetricCard';
import MatchModal from '../components/MatchModal';

export default function Home() {
  const [selectedCluster, setSelectedCluster] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle Match Click
  const handleMatchRequest = (profile) => {
    setSelectedProfile(profile);
    setModalOpen(true);
  };

  // Handle Successful Submission
  const handleMatchSubmit = (id) => {
    setSuccessMessage(`Match pipeline successfully generated for Stream ${id}. Check your email for verification steps.`);
    setTimeout(() => setSuccessMessage(''), 6000);
  };

  // Filter Logic
  const filteredData = useMemo(() => {
    return industrialProfiles.filter(item => {
      const matchCluster = selectedCluster === 'All' || item.cluster.includes(selectedCluster);
      const matchStatus = selectedStatus === 'All' || item.status === selectedStatus;
      return matchCluster && matchStatus;
    });
  }, [selectedCluster, selectedStatus]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] font-sans">
      {/* Primary Application Header */}
      <header className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900 text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="bg-emerald-500/90 text-slate-950 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider">
                Simulation Environment
              </span>
              <span className="text-slate-400 text-xs font-medium">
                Aligned with GEF-UNIDO Nigeria Industrial Energy Framework
              </span>
            </div>
            <h1 className="text-2xl md:text-[28px] font-bold tracking-tight mt-2 text-white">
              Nigeria Thermal Waste & Heat Exchange Network
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Anonymous B2B matching for industrial waste heat recovery and cleaner energy transitions
            </p>
          </div>
          <div className="text-xs bg-white/5 px-4 py-3 rounded-xl border border-white/10 text-slate-300 backdrop-blur-sm">
            <span className="block text-slate-500 uppercase tracking-wider text-[10px] font-semibold mb-1">Core Hubs</span>
            <span className="font-semibold text-emerald-400">Lagos · Ogun · Kano · Anambra</span>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Success Alert Banner */}
        {successMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3.5 rounded-xl text-sm font-medium shadow-sm">
            {successMessage}
          </div>
        )}

        {/* Stats Grid Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard title="Total Tracked Thermal Waste" value="22,000" unit="m³/h" description="Combined stream volume metrics" colorClass="text-slate-900" />
          <MetricCard title="Avg Flue Temp" value="267" unit="°C" description="High potential thermodynamic profiles" colorClass="text-orange-600" />
          <MetricCard title="Active Clusters Monitored" value="4" unit="Regions" description="Ikeja, Agbara, Ota, Sharada, Onitsha" colorClass="text-blue-600" />
          <MetricCard title="Simulated Carbon Mitigation" value="14.2" unit="k Tons/Yr" description="Est. baseline carbon offset values" colorClass="text-emerald-600" />
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Industrial Cluster</label>
              <select
                value={selectedCluster} onChange={(e) => setSelectedCluster(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-xs px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-medium transition-colors hover:border-slate-300"
              >
                <option value="All">All Regions</option>
                <option value="Ikeja">Ikeja, Lagos</option>
                <option value="Agbara">Agbara, Ogun</option>
                <option value="Ota">Ota, Ogun</option>
                <option value="Sharada">Sharada, Kano</option>
                <option value="Harbour">Onitsha, Anambra</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Stream Status</label>
              <select
                value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-xs px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-medium transition-colors hover:border-slate-300"
              >
                <option value="All">All Streams</option>
                <option value="Available">Available Asset</option>
                <option value="Matched">Matched/Utilized</option>
              </select>
            </div>
          </div>
          <div className="text-xs text-slate-400 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 self-stretch sm:self-auto flex items-center justify-center">
            Showing {filteredData.length} Anonymous Profiles
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredData.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-sm font-medium">No waste heat streams match your current filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((profile) => (
              <div key={profile.id} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {profile.id}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1.5 tracking-tight line-clamp-1">{profile.sector}</h4>
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      profile.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {profile.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-orange-50 border border-orange-100 rounded-xl px-3 py-2.5">
                      <span className="text-[10px] text-orange-700/70 font-semibold uppercase tracking-wide block">Temperature</span>
                      <span className="text-base font-bold text-orange-700">{profile.temperature_celsius}°C</span>
                    </div>
                    <div className="bg-sky-50 border border-sky-100 rounded-xl px-3 py-2.5">
                      <span className="text-[10px] text-sky-700/70 font-semibold uppercase tracking-wide block">Flow Rate</span>
                      <span className="text-base font-bold text-sky-700">{profile.flow_rate_m3_h} <span className="text-xs font-normal text-sky-600/80">m³/h</span></span>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl divide-y divide-slate-100">
                    <div className="flex items-center justify-between px-3 py-2 gap-3">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide shrink-0">Location Cluster</span>
                      <p className="text-slate-700 font-medium text-xs text-right">{profile.cluster}</p>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 gap-3">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide shrink-0">Thermal Source</span>
                      <p className="text-slate-700 font-medium text-xs text-right">{profile.source_type}</p>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 gap-3">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide shrink-0">System Availability</span>
                      <p className="text-slate-700 font-medium text-xs text-right">{profile.availability}</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl px-3 py-2.5">
                    <span className="text-[10px] text-emerald-700/70 font-semibold uppercase tracking-wide block mb-1">Primary Recovery Pathway</span>
                    <p className="text-emerald-900/80 text-[11px] leading-snug">{profile.potential_use}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 border-t border-slate-100">
                  {profile.status === 'Available' ? (
                    <button
                      onClick={() => handleMatchRequest(profile)}
                      className="w-full bg-slate-900 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-emerald-700 shadow-sm transition-colors duration-200"
                    >
                      Request Technical Match — NDA Required
                    </button>
                  ) : (
                    <button disabled className="w-full bg-slate-200 text-slate-400 text-xs font-semibold py-2.5 rounded-xl cursor-not-allowed">
                      Asset Allocation Secured
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* Match Request Workflow Modal Overlay */}
      <MatchModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        profile={selectedProfile}
        onSubmitSuccess={handleMatchSubmit}
      />
    </main>
  );
}
          
