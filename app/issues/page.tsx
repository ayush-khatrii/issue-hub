import IssueTable from "@/components/IssueTable";
import prisma from "@/prisma/client";
import IssueActions from "@/components/IssueActions";
import { Status } from "@prisma/client";

interface PROPS {
  searchParams: {
    status: Status
  }
}
export default async function Issues({ searchParams }: PROPS) {
  console.log(searchParams);
  const allIssues = await prisma.issue.findMany({
    where: {
      status: searchParams.status
    }
  });
  return (
    <>
      <section className="my-10 w-full px-3">
        <IssueActions />
        <div className="my-5">
          <IssueTable issues={allIssues} />
        </div>
      </section>
    </>
  )
}
