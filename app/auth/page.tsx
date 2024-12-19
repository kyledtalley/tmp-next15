"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: "/" }); // Redirect to homepage after successful sign-in
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-96 rounded-md border bg-white dark:bg-gray-800 p-5 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome Back!
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Sign in to continue
        </p>
        <div className="flex flex-col mt-6 gap-4">
          <Button
            className="flex items-center gap-2 justify-center bg-gray-900 text-white hover:bg-gray-700"
            onClick={() => handleSignIn("github")}
          >
            <FaGithub size={20} />
            Sign in with GitHub
          </Button>
          <Button
            className="flex items-center gap-2 justify-center bg-red-500 text-white hover:bg-red-600"
            onClick={() => handleSignIn("google")}
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
