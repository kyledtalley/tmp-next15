"use client";

export default function AuthErrorPage({ searchParams }: { searchParams: { error: string } }) {
  const errorMessage = searchParams.error || "Unknown error occurred.";

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Authentication Error</h1>
        <p className="text-red-600">{errorMessage}</p>
        <a href="/auth/signin" className="mt-4 inline-block text-blue-500 hover:underline">
          Go back to sign in
        </a>
      </div>
    </div>
  );
}
