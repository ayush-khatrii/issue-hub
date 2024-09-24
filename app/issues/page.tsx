import IssueTable, { IssueQuery } from "@/components/IssueTable";
import prisma from "@/prisma/client";
import IssueActions from "@/components/IssueActions";
import { Issue, Status } from "@prisma/client";
import { column } from "@/constants";

interface PROPS {
  searchParams: IssueQuery
}
export default async function Issues({ searchParams }: PROPS) {
  const allStatuses = Object.values(Status);
  const status = allStatuses.includes(searchParams.status) ? searchParams.status : undefined;

  const orderBy = column.map((column) => column.value).includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' } : undefined;

  const allIssues = await prisma.issue.findMany({
    where: {
      status
    },
    orderBy
  });
  
  return (
    <>
      <section className="my-10 w-full px-3">
        <IssueActions />
        <div className="my-5">
          <IssueTable searchParams={searchParams} issues={allIssues} />
        </div>
      </section>
    </>
  )
}
