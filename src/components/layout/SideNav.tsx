import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {NavItems} from "@/components/layout/NavItems";
import {Logo} from "@/components/ui/Logo";
import {ThemeToggle} from "@/components/shared/ThemeToggle";
import {LoginLogoutBtns} from "@/components/shared/LoginLogoutBtns";
import {UserMenuBar} from "@/components/shared/UserMenuBar";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";



type SideNavPropsT = {
  signedIn: boolean,
  user: KindeUser|null
}


export async function SideNav({signedIn, user}: SideNavPropsT) {

  return (

    <Sheet>

      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="fflex-col bg-secondary gap-6">

        <SheetHeader>
          <Logo className="h-12" href="/" />
          <SheetDescription>
            As melhores confrarias de vinhos
          </SheetDescription>
        </SheetHeader>

        <NavItems />

        <SheetFooter className="fflex-col gap-3">
          <ThemeToggle showText />
          {signedIn ? <UserMenuBar user={user} /> : <LoginLogoutBtns/>}
        </SheetFooter>

      </SheetContent>

    </Sheet>

  )

}