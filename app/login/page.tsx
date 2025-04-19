"use client";

import Image from "next/image";
import { Sources } from "@/lib/sources";
import LoginForm from "@/components/loginForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "@/lib/features/auth/AuthSlice";
import { redirect } from "next/navigation";
import { RoutePaths } from "@/lib/routePaths";
import { RootState } from "@/lib/features/auth/types";

export default function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const error = useSelector((state: RootState) => state.auth.error);

  useEffect(() => {
    if (isAuthenticated) {
      redirect(RoutePaths.Dashboard);
    }
  }, [isAuthenticated]);

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
            dispatch(
              authenticateUser({
                username: data.userName,
                password: data.password,
              })
            );
          }}
          error={error}
        />
      </div>
    </section>
  );
}
