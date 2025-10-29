 # === build stage ===
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# === runtime (nginx) ===
FROM nginx:1.27-alpine
COPY ./infra/nginx.conf /etc/nginx/conf.d/default.conf
# ⚠️ CRA створює папку build
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
