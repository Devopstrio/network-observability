export enum TelemetrySource {
  VPC_FLOW_LOG = "VPC_FLOW_LOG",
  KUBERNETES_CNI = "KUBERNETES_CNI",
  SERVICE_MESH = "SERVICE_MESH",
  ROUTER_IPFIX = "ROUTER_IPFIX"
}

export enum AnomalySeverity {
  INFO = "INFO",
  WARNING = "WARNING",
  CRITICAL = "CRITICAL",
  FATAL = "FATAL"
}

export interface NetworkFlow {
  id: string;
  sourceIp: string;
  destinationIp: string;
  sourcePort: number;
  destinationPort: number;
  protocol: "TCP" | "UDP" | "ICMP";
  bytesTransferred: number;
  packetsSent: number;
  source: TelemetrySource;
  timestamp: string;
}

export interface LatencyMetric {
  id: string;
  sourceEndpoint: string;
  destinationEndpoint: string;
  latencyMs: number;
  packetLossPercentage: number;
  jitterMs: number;
  timestamp: string;
}

export interface NetworkAnomaly {
  id: string;
  severity: AnomalySeverity;
  type: "LATENCY_SPIKE" | "TRAFFIC_DROP" | "DDOS_SUSPICION" | "UNUSUAL_PORT_SCAN";
  description: string;
  affectedEndpoints: string[];
  detectedAt: string;
  status: "OPEN" | "INVESTIGATING" | "RESOLVED";
}

export interface ObservabilityKPIs {
  averageGlobalLatencyMs: number;
  totalFlowsIngestedPerSecond: number;
  activeNetworkAnomalies: number;
  overallPacketLossRate: number;
  slosBreached: number;
}
