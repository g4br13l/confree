"use client"

import {NavItem} from "@/components/layout/NavItem";
import {CreditCardIcon, HomeIcon, WineIcon} from "lucide-react";


export function NavItems() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex-evenly w-full max-w-72 group topNavItems">
        <NavItem link="/">Inicio</NavItem>
        <NavItem link="#eventos">Eventos</NavItem>
        <NavItem link="#planos">Planos</NavItem>
      </div>

      {/* Mobile */}
      <div className="fflex-col md:hidden h-full w-full items-start gap-4 my-2 group sideNavItems">
        <NavItem icon={HomeIcon} link="/">Inicio</NavItem>
        <NavItem icon={WineIcon} link="#eventos">Eventos</NavItem>
        <NavItem icon={CreditCardIcon} link='/#planos'>Planos</NavItem>
      </div>

    </>
  );
}