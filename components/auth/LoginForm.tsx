"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormData } from "@/schemas/login.schema";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <div>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full border p-3 rounded"
        />

        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        Sign In
      </button>
    </form>
  );
}
