# Optimised for NAS: pre-built on Mac, runs on Linux
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN apk add --no-cache libc6-compat cairo pango jpeg giflib librsvg python3 build-base

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy pre-built files
COPY --chown=nextjs:nodejs public ./public
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

# Install Linux-specific sharp binary
RUN npm install --os=linux --libc=musl --cpu=x64 sharp

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
