import { getBuildInfo } from "@/lib/build-info";

export async function GET() {
  return Response.json(getBuildInfo(), {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
