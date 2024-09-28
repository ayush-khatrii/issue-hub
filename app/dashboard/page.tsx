import React from 'react';
import IssueChart from "@/components/IssueChart";
import IssueSummary from "@/components/IssueSummary";
import LatestIssues from "@/components/LatestIssues";
import prisma from "@/prisma/client";

export default async function Dashboard() {
  const [totalOpenIssues, totalClosedIssues, totalInProgressIssues] = await Promise.all([
    prisma.issue.count({ where: { status: "OPEN" } }),
    prisma.issue.count({ where: { status: "CLOSED" } }),
    prisma.issue.count({ where: { status: "IN_PROGRESS" } }),
  ]);

  return (
    <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
          <div className="">
            <LatestIssues />
          </div>
          <div className="">
            <IssueChart
              open={totalOpenIssues}
              inProgress={totalInProgressIssues}
              closed={totalClosedIssues}
            />
          </div>
        </div>
      </div>
      <div className="">
        <IssueSummary
          open={totalOpenIssues}
          inProgress={totalInProgressIssues}
          closed={totalClosedIssues}
        />
      </div>
    </section>
  );
}