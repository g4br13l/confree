import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import {Logo} from "@/components/ui/Logo";
import {LoginLogoutBtns} from "@/components/shared/LoginLogoutBtns";
import {NavItems} from "@/components/layout/NavItems";
import {ThemeToggle} from "@/components/shared/ThemeToggle";


export async function Header() {

  const nome = "gabriel";
  const signedIn = await getKindeServerSession().isAuthenticated();




  return (

    <header className='w-full bg-secondary'>
      <div className="flex h-16 wrapper items-center justify-between gap-4">

        <Logo />

        <nav className="hidden md:flex-center w-full mx-8">
          <NavItems />
        </nav>

        <div className="hidden md:flex-center gap-3">
          <ThemeToggle />
          <LoginLogoutBtns SignedIn={signedIn} />
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