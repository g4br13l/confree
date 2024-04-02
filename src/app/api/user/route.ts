import {NextRequest} from "next/server";
import prisma from "@/lib/db";




export async function GET(req: NextRequest) {

  console.log("req:", req)

  try {
    const users = await prisma.user.findMany()
    return Response.json({message: "OK - users fetched", users}, {status: 200})
  }
  catch(error) {
    return Response.json({message: "Error getting users", error}, {status: 500})
  }
}


export async function POST(req: NextRequest) {

  const user = await req.json()
  console.log("userReq:", user)

  try {
    const users = await prisma.user.create({ data: {
      name: user.name,
      email: user.email
    }})
    return Response.json({message: "OK - user created:", users}, {status: 200})
  }
  catch (error) {
    return Response.json({message: "Error", error}, {status: 500})
  }
}


export async function DELETE(req: Request) {

  const { id } = await req.json()
  try {
    const user = await prisma.user.delete({ where: { id } })
    return Response.json( {message: "OK - user deleted", user}, {status: 200} )
  }
  catch(error) {
    return Response.json( {message: "Error", error}, {status: 500} )
  }
}


type DtoPutUserT = {
  id: string,
  name: string,
  email: string
}

export async function PUT(req: NextRequest) {

  const user = await req.json()
  console.log("userReq:", user)

  try {
    const updatedUser = await prisma.user.update({
      where: { id: user.id},
      data: {
        name: user.name,
        email: user.email
      }
    })
    return Response.json({message: "OK - user updated:", updatedUser}, {status: 200})
  }
  catch (error) {
    return Response.json({message: "Error", error}, {status: 500})
  }
}








