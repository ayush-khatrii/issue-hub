"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import IssueBadge from "@/components/IssueBadge";
import Link from "next/link";
import { Issue } from "@prisma/client";

export default function IssueTable({ issues }: { issues: Issue[] }) {
  return (
    <Table
      aria-label="Issue table"
      classNames={{
        base: "max-w-full",
        table: "min-w-full",
        thead: "bg-default-100",
        tbody: "divide-y divide-default-200",
        tr: "hover:bg-default-100 transition-colors",
        th: "bg-default-200 text-default-600 font-semibold",
        td: "py-3 px-4",
      }}
      shadow="sm"
    // bordered
    >
      <TableHeader>
        <TableColumn>ISSUE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>CREATED AT</TableColumn>
      </TableHeader>
      <TableBody>
        {issues.map((issue: Issue) => (
          <TableRow key={issue.id}>
            <TableCell>
              <Link href={`/issues/${issue.id}`} className="text-primary hover:underline">
                {issue.title}
              </Link>
            </TableCell>
            <TableCell>
              <IssueBadge status={issue.status} />
            </TableCell>
            <TableCell>{issue.createdAt.toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}