import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LogOut, Settings} from "lucide-react";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";
import {ComponentProps, ComponentPropsWithoutRef, ElementType} from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import {cn} from "@/lib/utils";


type UserMenuBarPropsT = {
  user: KindeUser | null
} & ComponentProps<typeof MenubarPrimitive.Root>



export function UserMenuBar({user, className, ...props}: UserMenuBarPropsT) {

  const initials = user?.given_name?.slice(0,1).concat(user?.family_name?.slice(0,1) ?? "")



  return (

    <Menubar className={cn("h-14 border-none bg-transparent", className)}>
      <MenubarMenu>

        <MenubarTrigger className="w-full px-1.5" asChild>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src={user?.picture ?? ""} alt="sua foto" />
              <AvatarFallback className="bg-background">{initials}</AvatarFallback>
            </Avatar>
            <div className="fflex-col">
              <span className="flex w-full justify-start">{user?.given_name}</span>
            </div>
          </div>
        </MenubarTrigger>

        <MenubarContent className="w-36">
          <MenubarItem className="gap-4">
            <Settings size="18" /> Perfil
          </MenubarItem>
          <MenubarItem className="gap-4">
            <LogOut size="18" /> <LogoutLink>Sair</LogoutLink>
          </MenubarItem>
        </MenubarContent>

      </MenubarMenu>
    </Menubar>

  )


}