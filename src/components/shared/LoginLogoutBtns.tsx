import {LoginLink, LogoutLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";




export function LoginLogoutBtns({SignedIn}: {SignedIn: boolean}) {


  return (
    <div className='flex w-fit gap-3'>
      {SignedIn ? (
        <LogoutLink>
          <Button>Logout</Button>
        </LogoutLink>
      ) : (<>
          <LoginLink>
            <Button variant="outline">Entrar</Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="default">Criar conta</Button>
          </RegisterLink>
      </>)}
    </div>
  );
}