FROM node:23.11-alpine AS builder

# ตั้ง working directory
WORKDIR /app

# คัดลอก package.json และติดตั้ง dependencies
COPY package*.json ./
RUN npm install

# คัดลอก source code แล้ว build
COPY . .
RUN npm run build

# ขั้นตอนที่ 2: Production Image
FROM node:23.11-alpine AS runner

# ตั้ง working directory
WORKDIR /app

# คัดลอกเฉพาะไฟล์ที่จำเป็นจาก builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set environment variables (เลือกใส่ตามต้องการ)
ENV NODE_ENV=production

EXPOSE 3000

# Start app
CMD ["npm", "start"]


# # เลือก base image ที่ใช้ Node.js
# FROM node:23.11-alpine

# # กำหนด working directory
# WORKDIR /app

# # คัดลอกไฟล์ package.json และ package-lock.json มาที่ working directory
# COPY package*.json ./

# # ติดตั้ง dependencies
# RUN npm install

# # คัดลอก source code ทั้งหมด
# COPY . .

# # RUN npm run generate

# # สร้างโปรเจกต์
# RUN npm run build

# # เปิดพอร์ตที่แอปจะใช้งาน
# # EXPOSE 81
# EXPOSE 3000

# # คำสั่งในการรันแอป
# CMD ["npm", "run", "start"]

