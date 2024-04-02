"use client"

import {NavItem} from "@/components/layout/NavItem";
import {CreditCardIcon, HomeIcon, WineIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator";


export function NavItems() {


  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex-evenly w-full max-w-72 group topNavItems">
        <NavItem link="/#home">Inicio</NavItem>
        <NavItem link="/#eventos">Eventos</NavItem>
        <NavItem link="/#planos">Planos</NavItem>
      </div>

      {/* Mobile */}
      <div className="fflex-col md:hidden h-full w-full items-start gap-4 my-2 group sideNavItems">
        <NavItem icon={HomeIcon} link="/#home">Inicio</NavItem>
        <NavItem icon={WineIcon} link="/#eventos">Eventos</NavItem>
        <NavItem icon={CreditCardIcon} link='/#planos'>Planos</NavItem>

        <div className="fflex-col w-full gap-2 mt-10">
          <Separator />
          <p className="text-muted-foreground">Seu portal</p>
        </div>

        <NavItem icon={WineIcon} link="/events">Seus Eventos</NavItem>

      </div>

    </>
  );
}