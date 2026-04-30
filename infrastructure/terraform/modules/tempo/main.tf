resource "helm_release" "tempo" {
  name       = "tempo"
  repository = "https://grafana.github.io/helm-charts"
  chart      = "tempo"
  namespace  = "monitoring"

  set {
    name  = "traces.otlp.grpc.enabled"
    value = "true"
  }

  set {
    name  = "traces.otlp.http.enabled"
    value = "true"
  }
  
  set {
    name  = "storage.trace.backend"
    value = "s3" # Configured for production long-term trace storage
  }
}
