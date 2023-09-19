// signup.tsx

import Link from "next/link";
import './signup.css';

export default function Signup() {
  return (
    <>
      <div className="signup-page">
        <h1>This is Signup Page</h1>
        {/* เพิ่มฟอร์มสำหรับการสมัครสมาชิก */}
      </div>
      <Link href="/signin"> {/* เชื่อมโยงไปยังหน้า Signin */}
        <a>Signin</a>
      </Link>
    </>
  );
}
