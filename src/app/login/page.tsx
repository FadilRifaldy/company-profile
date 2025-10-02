"use client";
import {useEffect } from "react";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function LoginPage() {
  const router = useRouter();
  const inEmailRef = React.useRef<HTMLInputElement>(null);
  const inPasswordRef = React.useRef<HTMLInputElement>(null);
  const login = useAuthStore((s) => s.login);
  async function onBtSignIn() {
    try {
      // 1. mencocokkan data email dan password dengan yg ada di backendless
      const res = await fetch(
        `https://jobbingfold-us.backendless.app/api/data/accounts?where=${encodeURIComponent(
          `email='${inEmailRef.current?.value}' AND password='${inPasswordRef.current?.value}'`
        )}`
      );

      // jika hasil response === array kosong, maka lempar ke catch error
      const data = await res.json();

      if (!data.length) {
        throw new Error("Account not exist");
      }
      console.log("LOG RES SIGNIN", data);
      alert("Signin berhasil");
      // store data to locale strorage
      localStorage.setItem("auth", JSON.stringify(data[0]));
      login(data[0].email, data[0].username);
      router.replace("/");
    } catch (error) {
      console.log(error);
      alert("Signin gagal");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-96 py-96">
      <h2 className="text-xl font-bold mb-4 text-black">Sign In</h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Input email"
          className="shadow p-2 rounded text-black"
          ref={inEmailRef}
        />
        <input
          type="password"
          placeholder="Input password"
          className="shadow p-2 rounded text-black"
          ref={inPasswordRef}
        />
        <button
          type="button"
          onClick={onBtSignIn}
          className="bg-slate-600 text-white py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
