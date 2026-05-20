# ETAPA 1: Construcción (Build)
FROM node:22 AS build
WORKDIR /app

# Copiamos los archivos de dependencias y las instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y compilamos el proyecto para producción
COPY . .
RUN npm run build --configuration=production

# ETAPA 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copiamos el resultado compilado de la etapa 1 al servidor Nginx
# ¡IMPORTANTE! Revisa la ruta de abajo. 
COPY --from=build /app/dist/frontend-ies/browser /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]