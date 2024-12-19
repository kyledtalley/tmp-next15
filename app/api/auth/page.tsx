"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/buttons/button";
export default function AuthPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
                <div className="space-y-4">
                    <Button
                        onClick={() => signIn("github")}
                        className="w-full bg-gray-900 text-white hover:bg-gray-700"
                    >
                        Sign in with GitHub
                    </Button>
                    <Button
                        onClick={() => signIn("google")}
                        className="w-full bg-red-500 text-white hover:bg-red-600"
                    >
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    );
}
