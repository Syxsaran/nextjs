// signup.tsx

import Link from "next/link";
import './signup.css';

export default function SignUp() {
  return (
    <>
      <div className="signup-page">
        <h1>This is Sign Up Page</h1>
        {/* เพิ่มฟอร์มสำหรับการสมัครสมาชิก */}
      </div>
      <Link href="/signin"> {/* เชื่อมโยงไปยังหน้า Sign In */}
        <a>Sign In</a>
      </Link>
    </>
  );
}
