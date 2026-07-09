import { NextResponse } from 'next/server'
export async function POST(req: Request){const body=await req.json();return NextResponse.json({ok:true,message:'Lead received. Database and notifications will be connected in the next build.',lead:body})}
