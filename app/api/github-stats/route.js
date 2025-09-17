import { NextResponse } from "next/server";

export async function GET() {
    const query = `
    {
      user(login: "${process.env.GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

    try {
        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            cache: "no-store", // prevent caching during dev
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: "Failed to fetch from GitHub API" },
                { status: res.status }
            );
        }

        const data = await res.json();
        const totalContributions =
            data?.data?.user?.contributionsCollection?.contributionCalendar
                ?.totalContributions || 0;

        return NextResponse.json({ commits: totalContributions });
    } catch (error) {
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
