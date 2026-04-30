import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ObservabilityDashboard from './pages/ObservabilityDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Network Observability Platform is actively ingesting OpenTelemetry traces, Prometheus metrics, and eBPF flow logs. This module will visualize the data once the underlying analytics engines complete their current processing window.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ObservabilityDashboard />} />
          <Route path="/flows" element={<Placeholder name="Traffic Flow Analytics (eBPF / NetFlow)" />} />
          <Route path="/performance" element={<Placeholder name="Latency & Performance Metrics" />} />
          <Route path="/traces" element={<Placeholder name="Distributed Network Tracing (Tempo / OTel)" />} />
          <Route path="/topology" element={<Placeholder name="Dynamic Network Topology Map" />} />
          <Route path="/anomalies" element={<Placeholder name="Network Anomaly Detection Engine" />} />
          <Route path="/slo" element={<Placeholder name="SLO / SLA Tracking & Error Budgets" />} />
          <Route path="/settings" element={<Placeholder name="Observability Platform Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
