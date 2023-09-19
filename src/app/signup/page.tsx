"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import './signup.css';

// ต่อไปนี้เป็นตัวอย่าง code ในรูปแบบ Server Components
export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    // เพิ่มฟิลด์อื่นๆ ที่คุณต้องการรับข้อมูล
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // เรียกใช้ API สำหรับการลงทะเบียน
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // ลงทะเบียนสำเร็จ นำผู้ใช้ไปยังหน้าหลักหรือหน้าที่คุณต้องการ
        router.push("/");
      } else {
        // ลงทะเบียนไม่สำเร็จ แสดงข้อความผิดพลาดหรือให้ผู้ใช้ลองใหม่
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* เพิ่มฟิลด์อื่นๆ ที่คุณต้องการรับข้อมูล */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
