import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Network, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Server,
  Cloud,
  ShieldCheck,
  RotateCcw,
  Signal,
  Share2,
  Lock,
  Eye,
  Crosshair
} from 'lucide-react';

const networkLatencyData = [
  { time: '10:00', aws_azure: 12, aws_gcp: 14, gcp_azure: 18 },
  { time: '10:05', aws_azure: 15, aws_gcp: 13, gcp_azure: 19 },
  { time: '10:10', aws_azure: 14, aws_gcp: 16, gcp_azure: 22 },
  { time: '10:15', aws_azure: 18, aws_gcp: 45, gcp_azure: 25 }, // Spike detected
  { time: '10:20', aws_azure: 16, aws_gcp: 20, gcp_azure: 19 },
  { time: '10:25', aws_azure: 13, aws_gcp: 15, gcp_azure: 17 },
  { time: '10:30', aws_azure: 12, aws_gcp: 14, gcp_azure: 18 },
];

const trafficTypeDistribution = [
  { name: 'TCP', value: 75, color: '#6366f1' }, // Indigo
  { name: 'UDP', value: 15, color: '#3b82f6' }, // Blue
  { name: 'ICMP', value: 8, color: '#818cf8' },
  { name: 'Other', value: 2, color: '#4f46e5' },
];

const KPI_CARDS = [
  { title: 'Global Avg Latency', value: '42ms', trend: 'P99: 120ms', color: 'indigo', icon: Signal },
  { title: 'Flows Ingested/sec', value: '45.2k', trend: 'VPC/VNet Flow Logs', color: 'indigo', icon: Activity },
  { title: 'Active Network Anomalies', value: '2', trend: 'Requires Investigation', color: 'rose', icon: AlertTriangle },
  { title: 'SLO Compliance', value: '99.98%', trend: 'Target: 99.95%', color: 'indigo', icon: CheckCircle2 },
];

const ObservabilityDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Network Observability Command Center</h1>
          <p className="text-slate-400">Deep visibility into hybrid cloud latency, traffic flows, distributed traces, and packet anomalies.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Run Packet Trace
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Investigate Anomalies
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-400`} />
              </div>
              <div className={`text-xs font-medium text-${card.color}-400`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latency Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Cross-Cloud Network Latency (ms)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={networkLatencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="aws_azure" stroke="#6366f1" strokeWidth={2} dot={false} name="AWS ↔ Azure" />
                <Line type="monotone" dataKey="aws_gcp" stroke="#3b82f6" strokeWidth={2} dot={false} name="AWS ↔ GCP" />
                <Line type="monotone" dataKey="gcp_azure" stroke="#818cf8" strokeWidth={2} dot={false} name="GCP ↔ Azure" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Distribution */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Protocol Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {trafficTypeDistribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Anomaly & Trace Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Anomalies & Distributed Traces</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View All Traces</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Event / Trace Target</th>
                <th className="px-6 py-4 font-semibold">Severity</th>
                <th className="px-6 py-4 font-semibold">Source</th>
                <th className="px-6 py-4 font-semibold">Symptom</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'AWS us-east-1 ↔ GCP us-central1', severity: 'High', source: 'VPC Flow Logs', symptom: 'Latency Spike (45ms to 180ms)' },
                { name: 'K8s Cluster: payment-prod-01', severity: 'Medium', source: 'Cilium / eBPF', symptom: 'UDP Packet Drop > 2%' },
                { name: 'Azure VPN Gateway 02', severity: 'Critical', source: 'SNMP / Azure Monitor', symptom: 'Tunnel Flapping Detected' },
                { name: 'S3 Egress Flow Anomaly', severity: 'Low', source: 'Flow Analytics Engine', symptom: 'Unusual Volume (+400%)' },
              ].map((rec, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Crosshair className="w-5 h-5 text-indigo-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{rec.name}</span>
                        <span className="text-xs text-slate-500 font-mono">Trace ID: T-{Math.floor(Math.random() * 1000000)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider ${
                      rec.severity === 'Critical' ? 'text-rose-400 border border-rose-500/20 bg-rose-500/10' :
                      rec.severity === 'High' ? 'text-orange-400 border border-orange-500/20 bg-orange-500/10' :
                      rec.severity === 'Medium' ? 'text-amber-400' : 'text-slate-300'
                    }`}>
                      {rec.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{rec.source}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{rec.symptom}</td>
                  <td className="px-6 py-4">
                    <button className="text-xs font-bold text-indigo-500 hover:text-indigo-400">Analyze</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ObservabilityDashboard;
