import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      access_token?: string // Your custom access token
    } & DefaultSession["user"]
  }

  interface JWT {
    access_token?: string // Your custom access token in the JWT
  }
}
