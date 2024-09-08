"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import IssueBadge from "@/components/IssueBadge";
import Link from "next/link";

export default function IssueTable({ issues }: { issues: IssueType[] }) {
  return (
    <Table
      radius="sm"
      removeWrapper
      isHeaderSticky
    >
      <TableHeader>
        <TableColumn className="text-base text-black">Issue</TableColumn>
        <TableColumn className="text-base text-black" >Status</TableColumn>
        <TableColumn className="text-base text-black">Created At</TableColumn>
      </TableHeader>
      <TableBody>
        {
          issues.map((issue: IssueType) => (
            <TableRow key={issue.id} className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm">
              <TableCell>
                <Link href={`/issues/${issue.id}`} className="hover:text-blue-600 hover:underline">
                  {issue.title}
                </Link>
              </TableCell>
              <TableCell>
                <IssueBadge status={issue.status} />
              </TableCell>
              <TableCell>{issue.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table >
  );
}
