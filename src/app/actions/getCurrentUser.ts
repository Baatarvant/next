import { getSession } from "next-auth/react";

import prisma from "@/lib/prisma";

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log(session);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
