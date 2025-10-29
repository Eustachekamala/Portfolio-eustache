"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("/api/github-stats", { cache: "no-store" });

        if (!res.ok) {
          console.error("Failed to fetch commits:", await res.text());
          return;
        }

        const data = await res.json();
        setCommitCount(data?.commits ?? 0);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };

    fetchCommits();
  }, []);

  const stats = [
    { num: 2, text: "Years of experience" },
    { num: 26, text: "Projects completed" },
    { num: 16, text: "Technologies mastered" },
    { num: commitCount, text: "Code commits" },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={2.5}
                delay={0.3}
                className="text-4xl xl:text-6xl font-extrabold text-white"
              />
              <p
                className={`${
                  item.text.length < 15
                    ? "max-w-[100px]"
                    : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
