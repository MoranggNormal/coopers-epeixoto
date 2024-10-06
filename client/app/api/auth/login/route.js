import { createSession } from "@/app/actions";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { API_URL } from "@/constants/api";
import { HTTP_EXCEPTIONS } from "@/constants/http-status-code";
import { JWT_SECRET } from "@/constants/secrets";

export async function POST(request) {
  const { email, password } = await request.json();

  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email,
    password,
  });

  let response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  if (response.status === HTTP_EXCEPTIONS.BAD_REQUEST.code) {
    return NextResponse.json(
      { message: data.msg },
      { status: HTTP_EXCEPTIONS.BAD_REQUEST.code }
    );
  }

  if (data.token) {
    const decodedToken = jwt.verify(data.token, JWT_SECRET);

    if (!decodedToken || !decodedToken.exp) {
      throw new Error("Invalid token: missing expiration date");
    }

    const expiresAt = new Date(decodedToken.exp * 1000);
    
    await createSession(data.token, expiresAt);

    return NextResponse.json(decodedToken.user);
  } else {
    throw new Error("No token returned from the server");
  }
}
