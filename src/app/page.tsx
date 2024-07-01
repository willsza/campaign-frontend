import SignIn from "@/components/Signin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Campaign Manager!</h1>
      <SignIn />
    </main>
  );
}
