"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="p-2 container mx-auto">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/globe.svg" width={40} height={40} alt="logo" />
          <h1>Whisper Arc</h1>
        </div>
        <div className="md:hidden">
          <Menu className="cursor-pointer" />
        </div>
        <div className="hidden md:flex gap-2">
          <Button>Login</Button>
          <Button onClick={() => signOut}>Log out</Button>
        </div>
      </nav>
    </header>
  );
};
