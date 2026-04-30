resource "helm_release" "loki" {
  name       = "loki"
  repository = "https://grafana.github.io/helm-charts"
  chart      = "loki-stack"
  namespace  = "monitoring"

  set {
    name  = "loki.persistence.enabled"
    value = "true"
  }

  set {
    name  = "loki.persistence.size"
    value = "100Gi"
  }

  set {
    name  = "promtail.enabled"
    value = "true" # Deploy Promtail daemonset to collect logs from all nodes
  }
}
