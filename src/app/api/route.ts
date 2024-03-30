import {NextRequest} from "next/server";




export async function GET(req: NextRequest) {

  console.log(req.nextUrl.searchParams)
  return Response.json({message: "It works ;)"})
}



export async function POST(req: NextRequest) {

  const reqUser = await req.json()
  console.log("name:", reqUser.name)
  return Response.json({ message: "Post method works too." })

}







