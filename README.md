# แอปพลิเคชันจัดการหนังสือ (CRUD)

โปรเจกต์นี้เป็นแอปพลิเคชันสำหรับจัดการหนังสือ พัฒนาด้วย **React (Expo Router)** รองรับระบบผู้ใช้ และมีการสลับธีม (Dark/Light Mode)

## คุณสมบัติหลัก
- ลงทะเบียน / เข้าสู่ระบบ / โปรไฟล์ผู้ใช้
- ดูรายการหนังสือและรายละเอียดของแต่ละเล่ม
- เพิ่มหนังสือใหม่
- สลับธีมได้ (Dark / Light)

## โครงสร้างโปรเจกต์
```
app/
 ├─ index.jsx          # หน้าแรก
 ├─ signin.jsx         # หน้าเข้าสู่ระบบ
 ├─ signup.jsx         # หน้าลงทะเบียน
 ├─ profile.jsx        # หน้าโปรไฟล์
 ├─ about.jsx          # หน้าเกี่ยวกับแอป
 ├─ _layout.js         # Layout หลักของแอป
 ├─ context/           # จัดการ state ด้วย Context API
 │   ├─ BookContext.js
 │   ├─ SignIn.js
 │   └─ ThemeContext.js
 ├─ components/
 │   └─ ThemeToggle.js # ปุ่มสลับธีม
 └─ book/
     ├─ book.jsx       # รายการหนังสือ
     ├─ [id].jsx       # รายละเอียดหนังสือ
     └─ create.jsx     # เพิ่มหนังสือใหม่
```

## การใช้งาน
```bash
# ติดตั้ง dependencies
npm install

# รันแอป
npm expo start
```