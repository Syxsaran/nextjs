// pages/api/signup.js

export default function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = JSON.parse(req.body);
  
      // ทำการลงทะเบียนโดยตรวจสอบข้อมูลและบันทึกลงในฐานข้อมูลของคุณ
      // ส่งข้อมูลการลงทะเบียนสำเร็จหรือข้อผิดพลาดกลับไปยังผู้ใช้
      if (username && password) {
        // ในตัวอย่างนี้เราจะสมมติว่าการลงทะเบียนสำเร็จ
        res.status(200).json({ message: "Registration successful" });
      } else {
        res.status(400).json({ message: "Invalid registration data" });
      }
    } else {
      res.status(405).end();
    }
  }
  