"use client"
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { Account, Profile as NextAuthProfile, User, } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

interface ExtendedProfile extends NextAuthProfile {
  email_verified?: boolean;
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: { account: Account | null; profile?: ExtendedProfile }) {
      if (account?.provider === "google") {
        const allowedDomain = process.env.ALLOWED_EMAIL_DOMAIN;
        if (profile?.email_verified && profile.email?.endsWith(allowedDomain)) {
          return true;
        }
        console.warn("Sign-in failed: Invalid domain or email not verified");
        return false;
      }
      return true;
    },

    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    async session({ session, user }: { session: any; user: User }) {
      return session;
    },
    async jwt({ token, user, account }: { token: JWT; user?: User; account?: Account | null }) {
      if (account?.provider) {
        token.provider = account.provider;
      }
      if (user) {
        token.id = user.id;
      }
      return token;
    }

  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
});
