import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { API_URL } from "@/constants/api";
import { HTTP_EXCEPTIONS } from "@/constants/http-exceptions-code";

export async function DELETE(request) {
  const { id } = await request.json();
  const token = cookies().get("coopers-session")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "User must be provided" },
      { status: HTTP_EXCEPTIONS.BAD_REQUEST.code }
    );
  }

  if (!id) {
    return NextResponse.json(
      { message: "Task must be provided" },
      { status: HTTP_EXCEPTIONS.BAD_REQUEST.code }
    );
  }

  let headersList = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let response = await fetch(`${API_URL}/api/task/${id}`, {
    method: "DELETE",
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
