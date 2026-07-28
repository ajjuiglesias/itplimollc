import React, { useState } from 'react';
import { Plane, Radio, CheckCircle2, RefreshCw, ChevronRight } from 'lucide-react';

export const FlightTrackerWidget: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState<'DL1842' | 'AA2204' | 'UA1190'>('DL1842');

  const demoFlights = {
    DL1842: {
      number: 'DL 1842',
      airline: 'Delta Air Lines',
      origin: 'ATL (Atlanta Hartsfield)',
      destination: 'RDU (Raleigh-Durham)',
      status: 'Landed 6 Mins Early',
      statusColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      eta: '14:24 EST',
      gate: 'Terminal 2 • Gate C12',
      chauffeurStatus: 'Staged at Limousine Zone B',
      chauffeurName: 'Marcus Vance',
      vehicle: 'Mercedes-Maybach S 580',
    },
    AA2204: {
      number: 'AA 2204',
      airline: 'American Airlines',
      origin: 'CLT (Charlotte Douglas)',
      destination: 'RDU (Raleigh-Durham)',
      status: 'In Flight • On Time',
      statusColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
      eta: '15:10 EST',
      gate: 'Terminal 2 • Gate C8',
      chauffeurStatus: 'En Route to RDU FBO',
      chauffeurName: 'David Sterling',
      vehicle: 'Cadillac Escalade ESV',
    },
    UA1190: {
      number: 'UA 1190',
      airline: 'United Airlines',
      origin: 'EWR (Newark Liberty)',
      destination: 'RDU (Raleigh-Durham)',
      status: 'Delayed 18 Mins',
      statusColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
      eta: '16:05 EST',
      gate: 'Terminal 2 • Gate D4',
      chauffeurStatus: 'Dispatch Adjusted • Pickup Synchronized',
      chauffeurName: 'Anthony Brooks',
      vehicle: 'Mercedes Sprinter Jet Van',
    },
  };

  const activeData = demoFlights[selectedFlight] || demoFlights['DL1842'];

  return (
    <section id="flight-tracking" className="py-24 bg-[#F2EFE9] dark:bg-[#1A1A1A] transition-colors duration-500 relative overflow-hidden border-t border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-[#171717] dark:text-[#F8F6F2] text-[10px] uppercase tracking-[0.25em]">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Proprietary Dispatch Integration</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#171717] dark:text-[#F8F6F2] font-normal leading-tight">
              Live Flight Radar <br />
              <span className="text-gold-gradient font-light">Zero Wait Assurance.</span>
            </h2>

            <p className="text-sm text-[#66625C] dark:text-[#B8B8B8] font-light leading-relaxed">
              Never worry about flight delays, early landings, or gate changes at RDU Airport. 
              Our dispatch software connects directly to Federal Aviation radar feeds. Your chauffeur automatically adjusts pickup timing so you step off the plane into waiting luxury.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#171717] dark:text-white" />
                <span className="text-xs text-[#171717] dark:text-[#F8F6F2] font-light">60 Minutes Complimentary Baggage Claim Wait</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#171717] dark:text-white" />
                <span className="text-xs text-[#171717] dark:text-[#F8F6F2] font-light">Direct Contact via SMS/WhatsApp upon touchdown</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#171717] dark:text-white" />
                <span className="text-xs text-[#171717] dark:text-[#F8F6F2] font-light">Private Jet FBO Tarmac Greets (TAC Air / Signature)</span>
              </div>
            </div>
          </div>

          {/* Right Column Simulator Box */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl relative">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#171717] dark:text-[#F8F6F2]">
                    RDU Dispatch Radar Feed
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-[#66625C] dark:text-[#B8B8B8] animate-spin" />
                  <span className="text-[10px] font-mono text-[#66625C] dark:text-[#B8B8B8]">LIVE SYNC</span>
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6 p-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                {(['DL1842', 'AA2204', 'UA1190'] as const).map((flightKey) => (
                  <button
                    key={flightKey}
                    onClick={() => setSelectedFlight(flightKey)}
                    className={`py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      selectedFlight === flightKey
                        ? 'bg-[#171717] dark:bg-white text-white dark:text-[#0F0F0F] shadow-sm'
                        : 'text-[#66625C] dark:text-[#B8B8B8] hover:text-[#171717] dark:hover:text-white'
                    }`}
                  >
                    {demoFlights[flightKey].number}
                  </button>
                ))}
              </div>

              {/* Active Flight Card details */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-[#0F0F0F] border border-black/5 dark:border-white/5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#66625C] dark:text-[#B8B8B8] font-bold">
                      {activeData.airline}
                    </span>
                    <h4 className="font-serif text-2xl text-[#171717] dark:text-[#F8F6F2] font-normal mt-0.5">
                      {activeData.number}
                    </h4>
                    <p className="text-xs text-[#66625C] dark:text-[#B8B8B8] mt-1 font-light">
                      {activeData.origin} → <span className="font-medium text-[#171717] dark:text-[#F8F6F2]">{activeData.destination}</span>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${activeData.statusColor}`}>
                      {activeData.status}
                    </span>
                    <span className="text-xs text-[#66625C] dark:text-[#B8B8B8] font-mono">
                      ETA: {activeData.eta}
                    </span>
                  </div>
                </div>

                {/* Chauffeur Staging Info */}
                <div className="p-5 rounded-2xl bg-[#171717] dark:bg-[#202020] text-white border border-black/10 dark:border-white/10 shadow-lg">
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-white" />
                      <span className="text-xs uppercase tracking-widest font-semibold text-white/90">
                        Chauffeur Auto-Staging Status
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-white/60">
                      {activeData.gate}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] text-white/60 uppercase tracking-widest">Assigned Chauffeur</span>
                      <p className="font-semibold text-white mt-0.5">{activeData.chauffeurName}</p>
                      <p className="text-[11px] text-white/75">{activeData.vehicle}</p>
                    </div>

                    <div>
                      <span className="text-[10px] text-white/60 uppercase tracking-widest">Live Staging Progress</span>
                      <p className="font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {activeData.chauffeurStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
