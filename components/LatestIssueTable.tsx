"use client";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Issue, User } from "@prisma/client";
import Link from "next/link";
import IssueBadge from "./IssueBadge";
import Image from "next/image";

// Extend the Issue interface to include the assignedToUser field
interface IssueWithUser extends Issue {
  assignedToUser: User | null;
}

interface PROPS {
  issues: IssueWithUser[]; // Update the type to reflect the extended Issue with assignedToUser
}

const LatestIssueTable = ({ issues }: PROPS) => {
  return (
    <div>
      <Table
        removeWrapper
        aria-label="Latest Issues Table"
        classNames={{
          base: "w-full",
          table: "w-full",
          th: "bg-zinc-50 text-xl font-bold text-zinc-700 font-medium text-left py-2 px-4 border-b border-zinc-200",
        }}
      >
        <TableHeader>
          <TableColumn>Latest Issues</TableColumn>
        </TableHeader>
        <TableBody>
          {issues?.map((issue) => (
            <TableRow key={issue.id} className="hover:bg-zinc-100">
              <TableCell className="py-4 px-2">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <Link href={`/issues/${issue.id}`} className="font-normal text-zinc-900 hover:underline">
                      {issue.title}
                    </Link>
                    <div className="text-sm text-zinc-500">
                      <IssueBadge status={issue.status} />
                    </div>
                  </div>

                  {/* Render the assigned user's avatar if it exists */}
                  {issue.assignedToUser?.image && (
                    <div className="flex items-center ml-4">
                      <Image
                        src={issue.assignedToUser.image}
                        alt={issue.assignedToUser.name || ""}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestIssueTable;
