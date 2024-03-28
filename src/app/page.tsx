import Image from "next/image";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    /*<div>
      <LoginLink>Login</LoginLink>
      <Button>Test btn</Button>
    </div>*/

    <div>
      <section className="bg-bgapp-red/50 text-foreground py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">

          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Participe das melhores confrarias de vinho do RJ.
            </h1>
            <p className="p-regular-14 md:p-regular-20">
              Experimente os melhores vinhos, aprenda com os melhores sommeliers,
              e faça network com pessoas selecionadas.
            </p>
            <Button size="lg" className="w-full sm:w-fit text-md rounded-full">
              <Link href="#eventos">encontrar eventos</Link>
            </Button>
          </div>

          <Image src="/assets/banner/confra-banner-1-edit1.png" alt="hero" width="468" height="493"
                 className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>

        </div>
      </section>


      <section id="events" className=" flex flex-col wrapper my-8 gap-8 md:gap-12">
        <h2 className="h2-bold">Confrarias</h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          Busque - categorias
        </div>
      </section>

    </div>

  );

}
