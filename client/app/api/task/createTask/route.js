import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { API_URL } from "@/constants/api";
import { HTTP_EXCEPTIONS } from "@/constants/http-exceptions-code";

export async function POST(request) {
  const { task } = await request.json();
  const token = cookies().get("coopers-session")?.value;

  if (!token) { 
    return NextResponse.json(
      { message: "User must be provided" },
      { status: HTTP_EXCEPTIONS.BAD_REQUEST.code }
    );
  }

  let headersList = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let bodyContent = JSON.stringify({
    task
  });

  let response = await fetch(`${API_URL}/api/task`, {
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
