"use client";

import { redirect } from "next/navigation";
import Login from "./(routes)/auth/signin/page";

export default function Home() {
  return <Login />;
}
