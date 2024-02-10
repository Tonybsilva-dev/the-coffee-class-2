import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./prisma";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        email: string;
        image: string;
      };

      return session;
    },
  },
  pages: {
    signIn: "/dashboard",
    signOut: "/",
  },
  secret: process.env.NEXT_AUTH_SECRET as string,
};