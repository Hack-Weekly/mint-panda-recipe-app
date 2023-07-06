# Frontend

- `cd frontend` and `npm i`
- For Development: `npm run dev`
- For Deployment: `npm run build`

# Installation

- **Change file contents in `config.ts` in `/frontend/src/util` according to dev/prod api root:**
```
export const API_ROOT_DEV = "http://localhost:5000"
export const API_ROOT_PROD = "https://example.com"
```