const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");


export async function POST(req, res) {
  try {
     const reqBody = await req.json()
    const prisma = new PrismaClient()

    let result = await prisma.User.createMany({
       data: reqBody
      //       data: [
      //   {
      //     first_name: "Alice",
      //     last_name: "Smith",
      //     roll: 101,
      //     age: 17,
      //     grade: "11th",
      //     courses: "Math"
      //   },
      //   {
      //     first_name: "Alice2222",
      //     last_name: "Smith22222",
      //     roll: 102,
      //     age: 17,
      //     grade: "10th",
      //     courses: "Math"
      //   }
      // ]
    })


    return NextResponse.json({ status: "success", data: result })


  } catch (e) {
    return NextResponse.json({ status: "faild", data: e })
  }
}
