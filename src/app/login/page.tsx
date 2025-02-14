"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
      <div className="m-4">
        <Image
          className="dark:invert"
          src="/SWIFTER.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <div className="relative p-0.5 rounded-xl overflow-hidden">
        <div className="absolute inset-0 animate-gradient" />
        <Card className="relative w-[350px] max-w-md shadow-lg bg-white z-10">
          <CardHeader>
            <p className="text-center text-gray-600">Get started with SWIFTER today!</p>
          </CardHeader>
          <CardContent>
            <Input
              className="mt-2"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              className="mt-2"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:opacity-90">Sign Up</Button>

            <div className="relative my-4">
              <hr className="border-gray-300" />
              <span className="absolute left-1/2 top-[-10px] bg-white px-2 text-sm text-gray-500 transform -translate-x-1/2">
                OR
              </span>
            </div>

            <Button variant="outline" className="w-full">
                <Github size={24}/>
              Sign Up with GitHub
            </Button>

            <p className="mt-3 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-purple-600 hover:underline">
                Sign In
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background: linear-gradient(45deg, #800080, #79AAF0, #800080);
          background-size: 400% 400%;
          animation: gradientMove 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;
