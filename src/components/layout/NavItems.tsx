"use client"

import {NavItem} from "@/components/layout/NavItem";
import {CreditCardIcon, HomeIcon, WineIcon} from "lucide-react";


export function NavItems() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex-evenly w-full max-w-72 gap-2 group topNavItems">
        <NavItem link="/">Inicio</NavItem>
        <NavItem link="#eventos">Eventos</NavItem>
        <NavItem link="#planos">Planos</NavItem>
      </div>

      {/* Mobile */}
      <div className="flex flex-col h-screen place-content-between md:hidden">

        <div className="flex flex-col w-full items-start gap-4 my-2 group sideNavItems">
          {/*<NavItem icon={HomeIcon}>Inicio</NavItem>*/}
          <NavItem icon={HomeIcon} link="/">Inicio</NavItem>
          <NavItem>Eventos</NavItem>
          <NavItem>Planos</NavItem>
        </div>

        <div className="flex flex-col gap-4">
          {/*<ThemeToggle showText/>
          <SignedOut>
            <SigninSignupButtons className="flex w-full gap-2"/>
          </SignedOut>*/}
        </div>

      </div>

    </>
  );
}