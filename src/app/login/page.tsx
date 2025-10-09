"use client";
import { useEffect } from "react";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const inEmailRef = React.useRef<HTMLInputElement>(null);
  const inPasswordRef = React.useRef<HTMLInputElement>(null);
  const login = useAuthStore((s) => s.login);
  const { data: session } = useSession();

  async function onBtSignIn() {
    try {
      // 1. mencocokkan data email dan password dengan yg ada di backendless
      const res = await fetch(
        `https://aptstart-us.backendless.app/api/data/accounts?where=${encodeURIComponent(
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-[-50px] bg-gradient-to-br from-[#90C9F9] to-[#1976D2]">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>
        <form className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            className=" shadow-lg border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 hover:bg-blue-50"
            ref={inEmailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className="shadow-lg border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 hover:bg-blue-50"
            ref={inPasswordRef}
          />
          <button
            type="button"
            onClick={onBtSignIn}
            className="hover:scale-103 duration-500 cursor-pointer shadow-lg bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition hover:shadow-2xl"
          >
            Sign In
          </button>
          {session ? (
            <button
              type="button"
              onClick={() => signOut()}
              className="font-semibold bg-white text-black px-6 py-2 rounded-full hover:bg-gray-400 transition-transform hover:scale-110 duration-500 cursor-pointer"
            >
              Sign out ({session.user?.name})
            </button>
          ) : (
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="hover:shadow-2xl flex gap-2 items-center justify-center font-semibold bg-white text-black px-4 hover:bg-gray-400 transition-transform hover:scale-103 duration-500 py-3 rounded-lg cursor-pointer"
            >
              <Image
                src="/images/Google_Favicon_2025.svg.png"
                alt="arrow"
                width={0}
                height={0}
                className="w-[16px] h-[16px]"
              />
              Sign in with Google
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
