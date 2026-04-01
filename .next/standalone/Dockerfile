# ─── Stage 1: Build Linux x64 musl sharp in a clean, isolated environment ───
# This avoids workspace:* protocol conflicts that break `npm install` in the
# context of the main project's package.json.
FROM node:22-alpine AS sharp-installer
RUN mkdir /tmp/s && cd /tmp/s && \
    echo '{"name":"s","version":"1.0.0"}' > package.json && \
    npm install --os=linux --libc=musl --cpu=x64 sharp

# ─── Stage 2: Production runner ─────────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Runtime libs required by sharp (libvips) and canvas on Alpine
RUN apk add --no-cache libc6-compat vips-dev

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs public ./public
# Copy Lehrplan 21 PDFs (also in public/lehrplan-pdfs but explicit for clarity)
COPY --chown=nextjs:nodejs lehrplan-pdfs ./public/lehrplan-pdfs
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

# Replace the Mac-compiled sharp binary with the Linux musl x64 version
COPY --from=sharp-installer /tmp/s/node_modules/sharp ./node_modules/sharp

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
