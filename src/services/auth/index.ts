import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../database";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/app'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    GitHubProvider({
      clientId: 'Iv1.0aa50a89922c2615',
      clientSecret: '672cd0894ced3445d109635189c110f474790002'
    })
  ],
  secret: 'hjkgid7suaijkh8u3iouds'
})