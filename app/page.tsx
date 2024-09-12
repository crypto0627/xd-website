"use client";

import { Logo, About, Action, Hackathon, Partnership, ActiveMember, LatestNews } from "@/app/components";
import Navbar from "@/components/navbar";
export default function Component() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <section className="w-full py-16 md:py-16 lg:py-18 bg-gradient-to-b from-hero to-hero2">
          <Logo />
        </section>
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-vision to-vision2">
          <About />
        </section>
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-hackathon to-hackathon2">
          <Action />
        </section>
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-event to-event2">
          <Hackathon />
        </section>
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-partner to-partner2">
          <Partnership />
        </section>
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-contributor to-contributor2">
          <ActiveMember />
        </section>
        <section className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-lastnews to-lastnews2">
          <LatestNews />
        </section>
      </main>
      <footer className="flex flex-col justify-center gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 XueDAO organization. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
