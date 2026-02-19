import React, { useState } from 'react';
import { 
  UserCircle, 
  Globe, 
  Search, 
  CheckCircle, 
  Send, 
  ClipboardCheck, 
  Clock, 
  DollarSign, 
  Info,
  ChevronRight,
  ShieldCheck,
  Zap,
  Building2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tiers = [
    {
      title: "Tier 1 Term FA",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      intent: "Support families assessed as financially needy by MSF.",
      eligibility: ["NSF's family is a current ComCare recipient."],
      quantum: "$500 cash assistance per month.",
      duration: "Duration of the household's ComCare support.",
      color: "border-blue-200 bg-blue-50"
    },
    {
      title: "Tier 2 Term FA",
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      intent: "Support families with extenuating NS-related circumstances.",
      eligibility: [
        "Not a ComCare recipient.",
        "Clear NS-related financial hardship.",
        "Proof of recurrent expenses beyond basic upkeep."
      ],
      quantum: "Assessed case-by-case based on proof of expenses.",
      duration: "Assessed on a case-by-case basis.",
      color: "border-purple-200 bg-purple-50"
    },
    {
      title: "Bridging FA (BFA)",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      intent: "Immediate support while waiting for TFA processing.",
      eligibility: [
        "Household Per Capita Income (PCI) ≤ $800."
      ],
      quantum: "$400 per month.",
      duration: "Max 3 months (or until TFA is approved).",
      color: "border-amber-200 bg-amber-50"
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Initial Request",
      desc: "Inform your Unit (S1/AO/MPO) about your need for assistance.",
      icon: <UserCircle className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 2,
      title: "Online Application",
      desc: "Submit application via go.gov.sg/mindef-saf-fas4nsfs",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      id: 3,
      title: "First Assessment",
      desc: "MSS-PSC checks ComCare status for Tier 1 vs Tier 2 eligibility.",
      icon: <Search className="w-6 h-6" />,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 4,
      title: "BFA Disbursement",
      desc: "MSS-PSC assesses and disburses BFA immediately if eligible.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 5,
      title: "Unit Endorsement",
      desc: "Unit IO reviews and submits via iWADS system.",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 6,
      title: "Command Approval",
      desc: "Unit CO/Dept Head approves in iWADS (within 10 days).",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 7,
      title: "Final Verification",
      desc: "Unit IO signs docs and submits to MSS-PSC (within 3 days).",
      icon: <ClipboardCheck className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    },
    {
      id: 8,
      title: "Full Processing",
      desc: "Final assessment and TFA disbursement upon receipt of all docs.",
      icon: <Send className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
            NSF Financial Assistance Guide
          </h1>
          <p className="text-slate-500 text-lg">TFA (Tier 1 & 2) and BFA Support Schemes</p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-2 mb-8 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${activeTab === 'overview' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            Scheme Overview
          </button>
          <button 
            onClick={() => setActiveTab('procedure')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${activeTab === 'procedure' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            Application Steps
          </button>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-300">
          {activeTab === 'overview' ? (
            <div className="grid gap-6">
              {/* Tiers Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {tiers.slice(0, 2).map((tier, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border-2 transition-transform hover:scale-[1.02] bg-white ${tier.color}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      {tier.icon}
                      <h3 className="text-xl font-bold">{tier.title}</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mb-4">{tier.intent}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <UserCircle className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Eligibility</p>
                          <ul className="text-sm list-disc list-inside">
                            {tier.eligibility.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <DollarSign className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Quantum</p>
                          <p className="text-sm font-semibold">{tier.quantum}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Duration</p>
                          <p className="text-sm">{tier.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* BFA Highlight */}
              <div className={`p-6 rounded-2xl border-2 bg-white ${tiers[2].color}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    {tiers[2].icon}
                    <div>
                      <h3 className="text-xl font-bold">{tiers[2].title}</h3>
                      <p className="text-sm text-slate-600">Interim support during processing</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400">Income Ceiling</p>
                      <p className="text-sm font-bold">PCI ≤ $800</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400">Provision</p>
                      <p className="text-sm font-bold text-amber-600">$400 / month</p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="text-xs uppercase font-bold text-slate-400">Duration</p>
                      <p className="text-sm font-bold">Max 3 Months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 text-white p-4 rounded-xl flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-300 mt-0.5 shrink-0" />
                <p className="text-xs leading-relaxed opacity-90">
                  <strong>Note:</strong> If approved TFA is lower than BFA quantum ($400), TFA will commence only after the 3-month BFA cycle ends.
                </p>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative flex items-start space-x-4 group">
                    <div className={`z-10 flex items-center justify-center w-14 h-14 rounded-2xl shadow-sm border border-white transition-transform group-hover:scale-110 ${step.color}`}>
                      {step.icon}
                    </div>
                    
                    <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Step {step.id}</span>
                        {index < steps.length - 1 && <ChevronRight className="w-4 h-4 text-slate-300 md:hidden" />}
                      </div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold">Ready to apply?</span>
                </div>
                <a 
                  href="https://go.gov.sg/mindef-saf-fas4nsfs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-green-700 transition-colors"
                >
                  Apply Online
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-400 text-xs border-t border-slate-200 pt-6">
          <p>© 2024 MINDEF / SAF Financial Assistance Services</p>
          <p className="mt-1 italic">All applications assessed upon receipt of complete documents.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
