import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[400px]">
          <h1 className="text-4xl font-bold mb-8">Welcome Back</h1>

          <LoginForm />
        </div>
      </div>

      <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold mb-4">ticktock</h2>

          <p>
            Introducing ticktock, our cutting-edge timesheet web application.
          </p>
        </div>
      </div>
    </main>
  );
}
