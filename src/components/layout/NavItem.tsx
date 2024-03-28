"use client"

import {Button, ButtonProps} from "@/components/ui/button";
import {LucideIcon} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";


type NavItemPropsT = {
  icon?: LucideIcon;
  /*icon?: ElementType;*/
  link?: string;
} & ButtonProps




export function NavItem({icon: Icon, link="#", children, className, ...props}: NavItemPropsT) {

  const activeStyle = (usePathname()).startsWith(link) ? 'text-primary hover:text-primary' : '';
  const topNavItemStyle = 'group-[.topNavItems]:justify-center group-[.topNavItems]:w-fit';
  const sideNavItemStyle = 'group-[.sideNavItems]:justify-start group-[.sideNavItems]:w-full';
  const dynamicClasses = cn(topNavItemStyle, sideNavItemStyle, activeStyle, className);


  return (

    <Button variant="ghost" className={cn('flex rounded-full', dynamicClasses)} {...props}>
      {Icon && <Icon size="20" />}
      <Link href={link}>
        {children}
      </Link>
    </Button>

  )

}