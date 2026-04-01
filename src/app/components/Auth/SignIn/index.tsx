"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "@/app/components/Layout/Header/Logo";
import Loader from "@/app/components/Common/Loader";

const Signin = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const callback = await signIn("credentials", {
        ...loginData,
        redirect: false,
      });

      if (callback?.error) {
        toast.error(callback.error);
        setLoading(false);
      } else if (callback?.ok) {
        toast.success("Welcome back!");
        router.push("/");
      }
    } catch (err: any) {
      setLoading(false);
      toast.error("An unexpected error occurred.");
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
          Sign in to your account
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Enter your details below to continue
        </p>
      </div>

      {/* Social Sign In placeholder - keeping your logic purpose */}
      {/* <SocialSignIn /> */}

      {/* Divider */}

      <form onSubmit={loginUser} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 ml-1">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3 text-gray-900 dark:text-white outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1.5 ml-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-4 py-3 text-gray-900 dark:text-white outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="relative flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
        >
          <span
            className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity`}
          >
            Sign In
          </span>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader />
            </div>
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Don not have an account?{" "}
          <Link
            href="/signup"
            className="font-bold text-primary hover:underline underline-offset-4"
          >
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
