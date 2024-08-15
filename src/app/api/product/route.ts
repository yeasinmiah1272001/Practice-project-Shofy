
import { banner } from "@/Constant"
import { NextResponse } from "next/server"


export const GET = async() =>{
    return NextResponse.json({
        banner:banner,
        status:"success",
        message:"keep alive"
    })
}

