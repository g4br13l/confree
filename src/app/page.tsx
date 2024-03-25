import Image from "next/image";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";

export default function Home() {

  return (
    <div>
      <LoginLink>Login</LoginLink>
      <Button>Test btn</Button>
    </div>
  );

}
