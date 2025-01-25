/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export async function GET() {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs`);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
