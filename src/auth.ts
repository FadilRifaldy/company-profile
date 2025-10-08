import NextAuth from "next-auth" //import next auth agar bisa melakukan authtentikasi
import Google from "next-auth/providers/google" 
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
})