import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";


export function LoginLogoutBtns() {


  return (

    <div className="flex gap-2">

      <LoginLink>
        <Button variant="outline">Entrar</Button>
      </LoginLink>

      <RegisterLink>
        <Button variant="default">Criar conta</Button>
      </RegisterLink>

    </div>

  )
}