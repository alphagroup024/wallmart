"use client"

import { useSelector } from "react-redux"
import { redirect } from "next/navigation"
export default function Home() {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
  if (!isAuthenticated) {
    redirect("/login")
  }
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
