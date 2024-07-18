import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const resp = await fetch(
            "https://wakatime.com/api/v1/users/current/all_time_since_today",
            {
                headers: {
                    Authorization: `Basic ${btoa(
                        process.env.WAKATIME_API || ""
                    )}`,
                },
            }
        );
        const response = await resp.json();

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "cache-control":
                    "public, s-maxage=86400, stale-while-revalidate=43200",
            },
        });
    } catch (err: any) {
        return new Response(err.message, { status: 500 });
    }
}
