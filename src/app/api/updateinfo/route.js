const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");


export async function POST(req, res) {
  try {

    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const reqBody = await req.json()
    const prisma = new PrismaClient()

    let result = await prisma.User.update({
      where: { id },
      data:reqBody
      // data: {
      //   first_name: "Md",
      //   last_name: "Hasasn",
      //   roll: 1010,
      //   age: 19,
      //   grade: "B+",
      //   courses: "English"
      // }
    })


    return NextResponse.json({ status: "success", data: result })


  } catch (e) {
    return NextResponse.json({ status: "faild", data: e })
  }
}
