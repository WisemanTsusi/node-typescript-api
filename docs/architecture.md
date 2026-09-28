# Architecture

```text
Client -> Express middleware -> Auth/Validation -> Route -> Service -> Repository -> Persistence
                                      |                  |
                                      +-- request ID ----+-- structured logging
```

HTTP concerns remain in routes/middleware. Business behavior belongs in services. Persistence is behind repository interfaces. The included in-memory repository makes the example runnable without infrastructure; PostgreSQL, MySQL, DynamoDB or another adapter can replace it later.

Scaling path: managed database -> connection pooling/migrations -> cache where justified -> API gateway/WAF -> managed secrets -> metrics/tracing -> asynchronous messaging -> stateless horizontal scaling.
