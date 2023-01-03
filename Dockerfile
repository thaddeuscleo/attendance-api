
FROM node:19-alpine3.16 AS build

EXPOSE 3000
ARG DATABASE_URL_ARG
ENV DATABASE_URL=${DATABASE_URL_ARG}

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY . .

# Install app dependencies
RUN npm i -g @nestjs/cli
RUN npm ci --omit=dev && npm cache clean --force

# Migrate Database Changes
RUN npx prisma generate
RUN npx prisma db push

# Creates a "dist" folder with the production build
RUN npm run build


# === Build for Production ===
FROM node:19-alpine3.16 AS production

WORKDIR /usr/src/app

# Copy From Build
COPY --from=build /usr/src/app/node_modules/ /usr/src/app/node_modules/
COPY --from=build /usr/src/app/dist/ /usr/src/app/dist/
COPY --from=build /usr/src/app/package*.json /usr/src/app/

# Run Backend
CMD ["node", "dist/main"]