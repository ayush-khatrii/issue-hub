import prisma from "@/prisma/client";
import LatestIssueTable from "./LatestIssueTable";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      assignedToUser: true,
    },
  });

  return (
    <section>
      <LatestIssueTable issues={issues} />
    </section>
  );
};

export default LatestIssues;
