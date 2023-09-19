import Image from "next/image";
import Link from "next/link"; // เพิ่มการนำเข้า Link
import './page.css'; 

export default function Home() {
  return (
    <>
      <div className="welcome-container">
        <h1>Welcome</h1>
        <Link href="/signin"> {/* กำหนด URL ของหน้าหลัก (Main Page) */}
          <h1>
            <button type="button">Go To Main Page</button>
          </h1>
        </Link>
      </div>
    </>
  );
}
