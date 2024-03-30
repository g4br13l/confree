import {NextRequest} from "next/server";
import prisma from "@/lib/db";




export async function GET(req: NextRequest) {

  console.log(req.nextUrl.searchParams)
  return Response.json({message: "It works ;)"})
}


export async function POST(req: NextRequest) {

  const userReq = await req.json()
  console.log("name:", userReq.name)

  try {
    const user = await prisma?.user.create({
      data: {
        name: userReq.name,
        email: userReq.email
      }
    })
    return Response.json({message: "User created:", user}, {status: 200})
  }
  catch(error) {
    return Response.json({ message: "Error:", error }, {status: 500})
  }

}






