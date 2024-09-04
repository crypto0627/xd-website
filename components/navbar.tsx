"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_MENU = [
    { name: "Events", href: "https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH" },
    { name: "Telegram", href: "https://t.me/+0Rvawr400uNhNTY1" },
    { name: "Discord", href: "https://discord.gg/ZzFuAv9u3A" },
  ];

  const SOCIAL_ICONS = [
    { name: "ig", href: "https://www.instagram.com/xue_dao_/" },
    { name: "fb", href: "https://www.facebook.com/profile.php?id=100094540248529" },
    { name: "tg", href: "https://t.me/+0Rvawr400uNhNTY1" },
    { name: "dc", href: "https://discord.gg/ZzFuAv9u3A" },
    { name: "yt", href: "https://www.youtube.com/@XueDAO2023" },
    { name: "x", href: "https://twitter.com/xuedao_tw" },
    { name: "in", href: "https://www.linkedin.com/company/xuedao/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-white shadow">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/XD_logo.png"
          alt="Xue DAO logo"
          width={70}
          height={80}
          priority
        />
        <span className="sr-only">XueDAO</span>
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <div className="hidden md:flex gap-4">
          {NAV_MENU.map(({ name, href }) => (
            <Link key={name} href={href} passHref>
              {name}
            </Link>
          ))}
        </div>
      </nav>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <div className="hidden md:flex gap-4">
          {SOCIAL_ICONS.map(({ name, href }) => (
            <Link key={name} href={href} passHref>
              <Image
                src={`/social-icon/${name}.webp`}
                alt={name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger aria-label="Toggle menu">
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>

          <SheetContent side="top" className="bg-white">
            <nav className="flex flex-col gap-4">
              <Image
                src="/XD_logo.png"
                alt="Xue DAO logo"
                width={70}
                height={80}
                priority
              />
              {NAV_MENU.map(({ name, href }) => (
                <Link key={name} href={href} passHref>
                  {name}
                </Link>
              ))}
              <div className="flex gap-4">
                {SOCIAL_ICONS.map(({ name, href }) => (
                  <Link key={name} href={href} passHref>
                    <Image
                      src={`/social-icon/${name}.webp`}
                      alt={name}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
              <Separator className="mt-4" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 XueDAO organization. All rights reserved.
              </p>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
