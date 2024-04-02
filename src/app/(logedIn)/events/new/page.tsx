import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import {EventForm} from "@/app/(logedIn)/events/_ui/EventForm";


export default function NewEventPage() {


  return (
    <div className="wrapper fflex-col gap-4">

      <div className="flex-center gap-2">
        <Link href="/events">
          <Button size="icon" variant="ghost"><ChevronLeft/></Button>
        </Link>
        <h3 className="flex-center w-full"> Crie um novo evento </h3>
      </div>

      <div className="isolate">
        <EventForm />
      </div>


    </div>
  )
}