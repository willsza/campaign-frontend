"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function SignIn() {
  const router = useRouter();

  const handleLogin = () => {
    router.push(`/dashboard/campaigns`);
  };

  return (
    <Button className="mt-8" onClick={handleLogin}>
      Login
    </Button>
  );
}
