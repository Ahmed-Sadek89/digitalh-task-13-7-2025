import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth" // Correctly import from lib/auth.ts

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
