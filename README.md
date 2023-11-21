## Getting Started

### Sentry

Create an `.env` file with:

```
NEXT_PUBLIC_SENTRY_DSN=""
```

The Sentry DSN value comes from an initialized Sentry project.

### PNPM

```bash
pnpm install
pnpm dev
```

### Localhost

Open `localhost:3000` and visit each of this routes:

- `/api/edge/json`
- `/api/edge/stream`
- `/api/nodejs/json`
- `/api/nodejs/stream`

### Sentry Dashboard

Inside your Sentry dashboard, you should have a missing message for the Edge Runtime with Stream Response.
