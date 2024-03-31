const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");


export async function POST(req, res) {
  try {

    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const reqBody = await req.json()
    const prisma = new PrismaClient()

    let result = await prisma.User.delete({
      where: { id },
    })


    return NextResponse.json({ status: "success", data: result })


  } catch (e) {
    return NextResponse.json({ status: "faild", data: e })
  }
}
