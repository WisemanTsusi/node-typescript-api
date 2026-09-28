# API Design

The service uses `/api/v1` as an explicit version boundary, plural resource names, JSON representations, stable machine-readable error codes and `X-Request-ID` correlation.

The OpenAPI contract is maintained as `openapi.json`, allowing clients and tooling to understand the HTTP interface independently of implementation details.
