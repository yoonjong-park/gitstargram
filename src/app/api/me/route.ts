import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getUserByUsername } from "@/service/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Auth Error", { status: 401 });
  }

  return getUserByUsername(user.username).then(data => NextResponse.json(data));
}
