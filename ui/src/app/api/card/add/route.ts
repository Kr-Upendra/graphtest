import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json();
    console.log({ title });

    return NextResponse.json({ message: "Card Added." }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { message: err?.message || "Something went wrong.", error: err },
      { status: 500 }
    );
  }
}
