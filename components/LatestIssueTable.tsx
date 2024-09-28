"use client";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Issue, User } from "@prisma/client";
import Link from "next/link";
import IssueBadge from "./IssueBadge";
import Image from "next/image";

interface IssueWithUser extends Issue {
  assignedToUser: User | null;
}

interface PROPS {
  issues: IssueWithUser[];
}

const LatestIssueTable = ({ issues }: PROPS) => {

  return (
    <div className="">
      <Table
        removeWrapper
        aria-label="Latest Issues Table"
        classNames={{
          base: "max-w-full border rounded-lg shadow-md border-gray-300",
          table: "min-w-full border-collapse",
          tr: "hover:bg-gray-100 transition-colors",
          th: "bg-gray-50 text-gray-800 text-lg font-semibold text-left py-3 px-5 border-b border-gray-300",
          td: "py-3 px-5 text-gray-700 border-b border-gray-300",
        }}
      >
        <TableHeader>
          <TableColumn className="text-left">Latest Issues</TableColumn>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id} className="hover:bg-gray-100 transition-all duration-200">
              <TableCell className="py-3 px-4">
                <div className="flex justify-between items-center w-full space-x-4">
                  <div className="flex-1">
                    <Link href={`/issues/${issue.id}`} className="text-sm text-gray-900 hover:underline">
                      {issue.title}
                    </Link>
                    <div className="text-gray-500 mt-1">
                      <IssueBadge status={issue.status} />
                    </div>
                  </div>

                  {issue.assignedToUser?.image && (
                    <div className="flex items-center pl-10">
                      <Image
                        src={issue.assignedToUser.image}
                        alt={issue.assignedToUser.name || ""}
                        width={32}
                        height={32}
                        className="rounded-full shadow-sm"
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
