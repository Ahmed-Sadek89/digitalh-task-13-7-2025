import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github" // Example provider, replace with yours
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "@/lib/axios" // Assuming axios is configured for your API base URL

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        try {
          // Make sure this axios instance points to your backend API
          const res = await axios.post("/auth/login", {
            email: credentials.email,
            password: credentials.password,
          })
          // NextAuth expects a 'user' object. Your backend should return a user object
          // that includes the access_token or any other necessary user data.
          return res.data
        } catch (error) {
          console.error("Login error:", error)
          return null
        }
      },
    }),
    // ...add more providers here
  ],
  // You can add other NextAuth.js options here, like callbacks, pages, etc.
  secret: process.env.NEXTAUTH_SECRET || "your_super_secret_key", // Use a strong secret from env
  pages: {
    signIn: "/", // Redirect to home page for sign-in
    // You can define other custom pages here
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the access_token from the user object to the token
      if (user) {
        token.access_token = (user as any).access_token
      }
      return token
    },
    async session({ session, token }) {
      // Add the access_token from the token to the session
      if (session?.user) {
        ;(session.user as any).access_token = token.access_token as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}
