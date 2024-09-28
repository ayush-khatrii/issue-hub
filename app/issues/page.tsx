import IssueTable, { IssueQuery } from "@/components/IssueTable";
import prisma from "@/prisma/client";
import IssueActions from "@/components/IssueActions";
import { Status } from "@prisma/client";
import { column } from "@/constants";
import { Metadata } from "next";

interface PROPS {
  searchParams: IssueQuery
}
export default async function Issues({ searchParams }: PROPS) {
  const allStatuses = Object.values(Status);
  const status = allStatuses.includes(searchParams.status) ? searchParams.status : undefined;
  const where = { status };
  const orderBy = column.map((column) => column.value).includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' } : undefined;
  const page = parseInt(searchParams.page || "1");
  const pageSize = 10;

  const [allIssues, issueCount] = await Promise.all(
    [
      prisma.issue.findMany({
        where,
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize
      }),
      prisma.issue.count({ where })
    ]);

  const totalPages = Math.ceil(issueCount / pageSize);


  return (
    <>
      <section className="my-10 w-full px-3">
        <IssueActions />
        <div className="my-5">
          <IssueTable total={totalPages} initialPage={page} searchParams={searchParams} issues={allIssues} />
        </div>
      </section>
    </>
  )
}

export const metadata: Metadata = {
  title: "Issue Board - Issue List",
  description: "View all of your issues",
};