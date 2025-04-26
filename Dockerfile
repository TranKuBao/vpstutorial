FROM node:18-alpine

WORKDIR /app

# Sao chép package.json và package-lock.json trước để tận dụng cache của Docker
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn
COPY . .

# Tạo database rỗng
RUN mkdir -p /app/data

# Mở cổng 3000
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["node", "server.js"]
