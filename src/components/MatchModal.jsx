import React, { useState } from 'react';

export default function MatchModal({ isOpen, onClose, profile, onSubmitSuccess }) {
  const [formData, setFormData] = useState({ companyName: '', email: '', authorizedRole: '' });
  const [agreed, setAgreed] = useState(false);

  if (!isOpen || !profile) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return alert("You must agree to the NDA terms to proceed.");
    onSubmitSuccess(profile.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-start border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Initiate Secure Technical Match</h3>
            <p className="text-xs text-slate-500 mt-0.5">Target Stream: {profile.id} ({profile.sector})</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold p-1">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 leading-relaxed">
            <strong>🔒 Corporate Non-Disclosure Notice:</strong> This profile is protected under the MAN/UNIDO Industrial Data Framework. Corporate coordinates will only be unlocked upon standard digital token signing and verification.
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company / Facility Name</label>
            <input 
              type="text" required placeholder="e.g., Nigerian Breweries Plc"
              className="w-full text-slate-800 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
              value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Corporate Email</label>
              <input 
                type="email" required placeholder="name@company.com.ng"
                className="w-full text-slate-800 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Designation / Role</label>
              <input 
                type="text" required placeholder="e.g., Plant Operations Manager"
                className="w-full text-slate-800 px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                value={formData.authorizedRole} onChange={e => setFormData({...formData, authorizedRole: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <input 
              type="checkbox" id="nda-check" className="mt-0.5 accent-emerald-600 h-4 w-4"
              checked={agreed} onChange={e => setAgreed(e.target.checked)}
            />
            <label htmlFor="nda-check" className="text-xs text-slate-600 leading-tight select-none">
              I agree to the legally binding mutual NDA frameworks and confirm our facility possesses technical capabilities to off-take or broker this thermal load.
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
            <button 
              type="button" onClick={onClose}
              className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-sm hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm transition"
            >
              Submit Matching Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
