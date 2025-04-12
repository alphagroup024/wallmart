"use client";

import Image from "next/image";
import { Sources } from "@/lib/sources";
import LoginForm from "@/components/loginForm";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="bg-background h-screen w-screen relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={Sources.HomeBg}
          alt="Wallmart"
          width={1083}
          height={1159}
          className="object-cover opacity-45"
        />
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <LoginForm
          onSubmitForm={(data) => {
            console.log(data);
          }}
          error={error}
        />
      </div>
    </section>
  );
}
