import Image from "next/image";
import logo from "../../../public/assets/logo/logo3-edit4.png";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {LinkHTMLAttributes} from "react";




export function Logo({className, ...props}: LinkHTMLAttributes<HTMLLinkElement>) {


  return (
    <Link  className={cn('h-full min-w-fit', className)} href='/'>
      <Image src={logo} alt='logo' style={{height: '100%', width: 'auto'}} priority />
    </Link>
  )

}