import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {KindeUser} from "@kinde-oss/kinde-auth-nextjs/types";
import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";
import {Prisma as GenPrisma} from "@/prisma/generated/prisma-client-js/index.js";




export async function GET() {

  /*type UserPayload = GenPrisma.$UserPayload["scalars"];*/
  /*type UserCreateArgs = GenPrisma.UserCreateArgs;*/
  const {getUser} = getKindeServerSession()
  const kindeUser: KindeUser|null = await getUser()

  if(!kindeUser || !kindeUser.id) {
    throw new Error("You dont have a user signedIn and identified")
  }

  let dbUser = await prisma.user.findUnique({ where: {id: kindeUser.id} })

  if(!dbUser) {
    dbUser = await prisma.user.create({ data: {
      id: kindeUser.id,
      name: (kindeUser.given_name?.concat(" ").concat(kindeUser.family_name || "")) ?? "",
      email: kindeUser.email ?? "",
      profileImage: kindeUser.picture ?? `https://avatar.vercel.sh/${kindeUser.given_name}`,
    }})
  }

  return NextResponse.redirect("http://localhost:3000/")

}