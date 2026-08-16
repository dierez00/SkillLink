FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 5000
HEALTHCHECK --interval=10s --timeout=3s --retries=5 CMD wget -q --spider http://localhost:5000/health || exit 1
CMD ["npm", "start"]
