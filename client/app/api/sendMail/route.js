import { NextResponse } from "next/server";

import { API_URL } from "@/constants/api";
import { HTTP_EXCEPTIONS } from "@/constants/http-exceptions-code";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name,
    email,
    phone,
    message,
  });

  let response = await fetch(`${API_URL}/api/sendMail`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  if (response.status === HTTP_EXCEPTIONS.BAD_REQUEST.code) {
    return NextResponse.json(
      { data },
      { status: HTTP_EXCEPTIONS.BAD_REQUEST.code }
    );
  }

  return NextResponse.json(data);
}
