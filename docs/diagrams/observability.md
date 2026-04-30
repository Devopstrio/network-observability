# Telemetry & Flow Architecture Diagrams

## 11. OpenTelemetry Collection Flow
*How the OTel Collector processes and routes telemetry data.*

```mermaid
graph TD
    subgraph "Receivers"
        OTLP[OTLP gRPC/HTTP]
        Jaeger[Jaeger Receiver]
        Zipkin[Zipkin Receiver]
    end

    subgraph "Processors"
        Batch[Batch Processor]
        Attr[Attributes Processor]
        Filter[Filter Processor]
    end

    subgraph "Exporters"
        Prom[Prometheus Exporter]
        Loki[Loki Exporter]
        Tempo[Tempo Exporter]
    end

    OTLP --> Batch
    Jaeger --> Batch
    Zipkin --> Batch
    
    Batch --> Attr
    Attr --> Filter
    
    Filter --> Prom
    Filter --> Loki
    Filter --> Tempo
```

## 15. eBPF CNI visibility
```mermaid
graph LR
    E[eBPF] --> K[Kern]
    K --> O[Obse]
```

## 20. Trace to Log Correlation
```mermaid
graph TD
    UI[Grafana Dashboard]
    UI -->|TraceID: abc-123| Tempo[Tempo Backend]
    UI -->|Query: trace_id=abc-123| Loki[Loki Backend]
    
    Tempo -->|Returns Trace Span| UI
    Loki -->|Returns Correlated Logs| UI
```

## 25. Service mesh metrics
```mermaid
graph LR
    I[Isti] --> E[Envo]
    E --> P[Prom]
```
