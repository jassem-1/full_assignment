import { useRouter } from "next/router";

export default function AuthErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Authentication Error</h1>
        {error === "OAuthAccountNotLinked" ? (
          <p className="mt-4 text-gray-600">
            This email is already registered with a different sign-in method.
            Please use the method you initially used to register.
          </p>
        ) : (
          <p className="mt-4 text-gray-600">An unknown error occurred.</p>
        )}
        <button
          onClick={() => router.push("/login")}
          className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Go Back to Login
        </button>
      </div>
    </div>
  );
}
