import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo/logo_icon.png';
import {LoginLink, LogoutLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export async function Header() {

  const isAuthenticated = await getKindeServerSession().isAuthenticated();



  return (

    <header className="w-full bg-secondary">
      <div className="flex h-16 wrapper items-center justify-between gap-4">

        <Link className='h-full min-w-fit' href='/'>
          <Image src={logo} alt='logo' style={{height: '100%', width: 'auto'}} priority />
        </Link>

        <nav className="hidden md:flex justify-around w-full mx-8">
          <div>1navItem</div>
          <div>2navItem</div>
          <div>3navItem</div>
        </nav>

        <div className="hidden md:flex justify-end gap-3">
          <span>Theme</span>

          {isAuthenticated ? (
            <LogoutLink>
              <Button>Logout</Button>
            </LogoutLink>
          ):
          (
            <div className='flex w-fit gap-3'>
              <LoginLink>
                <Button variant="outline">Entrar</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant="default">Criar conta</Button>
              </RegisterLink>
            </div>
          )
          }

        </div>

        <div className="flex md:hidden justify-end gap-3">
          <span>1_mob_nav_items</span>
          <span>2_mob_nav_items</span>
          <span>3_mob_nav_items</span>
        </div>

      </div>
    </header>

  )
}