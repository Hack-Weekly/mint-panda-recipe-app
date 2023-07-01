FROM docker.io/node:lts-alpine AS base

# Add package file
COPY package.json ./

# Install deps
RUN npm install


# Copy source
COPY src ./src
COPY tsconfig.json .
COPY ./prisma ./prisma


# Run Prisma Generate
RUN npx prisma generate

# Build dist
RUN npm run build 

# Start production image build
FROM docker.io/node:lts-alpine

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

# Expose port 3000
EXPOSE 5000 
CMD ["dist/src/server.js"]