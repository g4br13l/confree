import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server';
import {Logo} from "@/components/ui/Logo";
import {LoginLogoutBtns} from "@/components/shared/LoginLogoutBtns";
import {NavItems} from "@/components/layout/NavItems";
import {ThemeToggle} from "@/components/shared/ThemeToggle";
import {SideNav} from "@/components/layout/SideNav";
import {UserMenuBar} from "@/components/shared/UserMenuBar";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";


export async function Header() {

  const nome = "gabriel";
  const {getUser, isAuthenticated} = getKindeServerSession();

  const signedIn: boolean = await isAuthenticated();
  const user: KindeUser|null = await getUser();



  return (

    <header className='w-full bg-secondary'>
      <div className="flex h-16 wrapper items-center justify-between gap-4">

        <Logo/>

        <nav className="hidden md:flex-center w-full mx-5">
          <NavItems/>
        </nav>

        <div className="hidden md:flex-center gap-2">
          <ThemeToggle/>
          {signedIn ?
            <UserMenuBar className="min-w-[140px] max-w-[200px]" user={user} /> :
            <LoginLogoutBtns/>
          }
        </div>

        <div className="flex md:hidden justify-end gap-3">
          <SideNav signedIn={signedIn} user={user} />
        </div>

      </div>
    </header>

  )
}