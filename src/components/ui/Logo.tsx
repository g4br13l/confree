import Image from "next/image";
import logo from "../../../public/assets/logo/logo3-edit4.png";
import Link from "next/link";




export function Logo() {


  return (
    <Link className='h-full min-w-fit' href='/'>
      <Image src={logo} alt='logo' style={{height: '100%', width: 'auto'}} priority />
    </Link>
  )

}