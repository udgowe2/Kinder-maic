# Optimised for NAS: pre-built on Mac, runs on Linux
FROM node:22-alpine AS sharp-builder

RUN apk add --no-cache python3 build-base g++ cairo-dev pango-dev jpeg-dev giflib-dev librsvg-dev
RUN npm install --os=linux --libc=musl --cpu=x64 --prefix=/sharp-dist sharp

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN apk add --no-cache libc6-compat cairo pango jpeg giflib librsvg

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs public ./public
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

# Replace Mac sharp with Linux sharp
COPY --from=sharp-builder /sharp-dist/node_modules/sharp ./node_modules/sharp

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
