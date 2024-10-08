"use server";
import { signIn, signOut } from "@/auth";

export async function handleSignOut() {
  await signOut({ redirectTo: "/sign-in" });
}
export async function handleGitHubSignIn() {
  await signIn("github", { redirectTo: "/" });
}
