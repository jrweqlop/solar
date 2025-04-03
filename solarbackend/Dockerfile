# เลือก base image ที่ใช้ Node.js
FROM node:23.11-alpine

# กำหนด working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json มาที่ working directory
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมด
COPY . .

RUN npm run generate

# สร้างโปรเจกต์
RUN npm run build

# เปิดพอร์ตที่แอปจะใช้งาน
EXPOSE 4500

# คำสั่งในการรันแอป
CMD ["npm", "run", "start:prod"]

