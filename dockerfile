# Sử dụng Node.js LTS
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy file package trước để cài dependency
COPY package*.json ./

# Cài dependency
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Mở cổng app 
EXPOSE 8080

# Lệnh chạy app
CMD ["npm", "start"]
