"use server";

import { cookies } from "next/headers";
import { SESSION_KEY } from "@/constants/secrets";

export async function createSession(token, expiresAt) {
  cookies().set(SESSION_KEY, token, {
    httpOnly: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  cookies().delete(SESSION_KEY);
}
