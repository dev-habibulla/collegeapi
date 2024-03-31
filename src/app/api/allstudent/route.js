const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");


export async function POST(req, res) {
    try {
        const reqBody = await req.json()
        const prisma = new PrismaClient()

        let result = await prisma.User.findMany()


        return NextResponse.json({ status: "success", data: result })


    } catch (e) {
        return NextResponse.json({ status: "faild", data: e })
    }
}
