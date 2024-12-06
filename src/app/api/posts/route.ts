import { auth } from "@/lib";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { title, body } = await request.json();

    const session = await auth();

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const post = await prisma.post.create({
      data: {
        authorId: session?.user?.id,
        title,
        body,
        slug: title,
      },
    });

    return Response.json(post, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
