"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import './signin.css';



export default function Page() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //set data to API
    const resp = await fetch("http://localhost:3000/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });

    if (resp.ok) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <>
      <div className="signin-page">
      <h1>This is Signin Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={formValue.username}
          onChange={handleChange}
          placeholder="Username"
        ></input>
        <input
          type="text"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Password"
        ></input>
        <button type="submit">Signin</button>
      </form>
    </div>
    </>
  );
}
