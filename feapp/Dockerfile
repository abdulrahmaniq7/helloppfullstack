FROM node:20

WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

RUN rm -rf node_modules package-lock.json && npm install

# Copy the rest of the app
COPY . .

# Build the production version
RUN npm run build


RUN npm install -g serve
CMD ["serve", "-s", "build"]

EXPOSE 3000

