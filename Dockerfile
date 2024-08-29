# Use a imagem base oficial do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie todo o código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que o servidor vai rodar
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
