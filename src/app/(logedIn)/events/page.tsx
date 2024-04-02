import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function EventsPage() {


  return (

    <div>
      <div className="wrapper fflex-col gap-4">

        <div className="flex-center gap-2">
          <h3 className="flex-center w-full"> Seus eventos </h3>
          <Link href="/events/new/">
            <Button> Novo </Button>
          </Link>
        </div>

      </div>
    </div>

  )
}