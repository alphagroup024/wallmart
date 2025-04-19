"use client";

import { Button } from "@/components/ui/button";
import { Strings } from "@/lib/strings";
import { Sources } from "@/lib/sources";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RoutePaths } from "@/lib/routePaths";
export default function Home() {
  const router = useRouter();
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
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={Sources.HomeBanner}
          alt="Wallmart"
          width={1083}
          height={1159}
          className="object-cover opacity-45"
        />
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-on-background">
          {Strings.AppName}
        </h1>
        <p className="text-on-background text-2xl font-medium mt-2">
          {Strings.AppDescription}
        </p>
        <Button
          className="mt-4 bg-primary-container text-on-primary-container text-lg px-8 py-4"
          onClick={() => {
            router.push(RoutePaths.Login);
          }}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
