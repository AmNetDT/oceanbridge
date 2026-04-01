"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "@/app/components/Layout/Header/Logo";
import Loader from "@/app/components/Common/Loader";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      toast.success("Account created successfully!");
      router.push("/signin");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header & Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create an account
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Join us and start your journey today
        </p>
      </div>

      {/* <SocialSignUp /> */}

      {/* Divider */}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3 text-gray-900 dark:text-white outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@company.com"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3 text-gray-900 dark:text-white outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3 text-gray-900 dark:text-white outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className="relative flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
        >
          <span
            className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity`}
          >
            Create Account
          </span>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader />
            </div>
          )}
        </button>
      </form>

      {/* Footer Links */}
      <div className="mt-8 space-y-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-4">
          By creating an account, you agree to our{" "}
          <Link
            href="/privacy"
            className="text-primary font-semibold hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="text-primary font-semibold hover:underline"
          >
            Terms of Service
          </Link>
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-bold text-primary hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
