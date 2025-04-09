# Etapa 1: Build da aplicação Angular
FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine

# Copia a build Angular para o Nginx
COPY --from=build /app/dist/localiza-pessoas/browser /usr/share/nginx/html

# Substitui o arquivo default do Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
