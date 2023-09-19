// pages/api/signup.js

export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { username, password } = JSON.parse(req.body);
  
        // ตรวจสอบการลงทะเบียนและบันทึกข้อมูลผู้ใช้ลงในฐานข้อมูล
        // ในตัวอย่างนี้เราจะสมมติว่าการลงทะเบียนเป็นสำเร็จเสมอ
        // คุณต้องแทนที่ส่วนนี้ด้วยการบันทึกข้อมูลลงในฐานข้อมูลของคุณ
  
        res.status(200).json({ message: "Registration successful" });
      } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Registration failed" });
      }
    } else {
      res.status(405).end(); // ไม่อนุญาตให้ใช้เมธอด HTTP อื่นนอกจาก POST
    }
  }
  