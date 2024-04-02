"use server"

import {EventFormSchemaT} from "@/app/(logedIn)/events/types";
import prisma from "@/lib/db";
//import {revalidatePath} from "next/cache";




export async function saveNewEvent(formData: EventFormSchemaT) { //formData: FormData

  console.log("Server Action => formData:", formData )

  try {
    console.log("trying to save the event")
    const eventSaved = await prisma?.event.create({
      data: {
        title: formData.title,
        description: formData.description,
        date: formData.date
      }
    })
    console.log("event saved:", eventSaved)
    //revalidatePath("/events/new", "page")
    //return Response.json({message: "User created:", user}, {status: 200})
  }
  catch(error) {
    console.log("error:", error)
    //return Response.json({ message: "Error:", error }, {status: 500})
  }

}













