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
        return false; // Return false if the condition is not met
      }
      return true; // Allow sign-in for other providers
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirect URLs are safe
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    async session({ session, user }) {
      // Add custom session properties here if needed
      return session;
    },
    async jwt({ token, user, account }) {
      // Handle JWT token updates here if needed
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});
