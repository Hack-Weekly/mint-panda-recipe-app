# Frontend

- `cd frontend` and `npm i`
- For Development: `npm run dev`
- For Deployment: `npm run build`

# Installation

## Development:

- **Create an `.env.development` file inside `/frontend` with the contents:**
```
VITE_API_ROOT=http://localhost:5000
```
where `http://localhost:5000` is your development api url

## Production:

- **Create an `.env.production` file inside `/frontend` with the contents:**
```
VITE_API_ROOT=https://example.com/api/recipes
```
where `https://example.com/api/recipes` is your production api url