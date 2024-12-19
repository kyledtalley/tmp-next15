import NextAuth, { Profile as NextAuthProfile } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

interface ExtendedProfile extends NextAuthProfile {
  email_verified?: boolean;
}

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      const extendedProfile = profile as ExtendedProfile;
      if (account?.provider === "google") {
        if (extendedProfile.email_verified && extendedProfile.email?.endsWith("@example.com")) {
          return true;
        }
        return false;
      }
      return true; 
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    async session({ session, user }) {
      return session;
    },
    async jwt({ token, user, account }) {
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", 
    verifyRequest: "/auth/verify-request", 
    newUser: "/auth/new-user", 
  },
});
