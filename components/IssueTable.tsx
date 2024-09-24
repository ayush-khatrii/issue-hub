"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import IssueBadge from "@/components/IssueBadge";
import Link from "next/link";
import { Issue, Status } from "@prisma/client";
import { FaArrowUpLong } from "react-icons/fa6";


export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery,
  issues: Issue[]
}

export const column: { label: string, value: keyof Issue }[] = [
  {
    label: "Issue",
    value: "title"
  },
  {
    label: "Status",
    value: "status"
  },
  {
    label: "Created",
    value: "createdAt"
  }
]
export default function IssueTable({ issues, searchParams }: Props) {


  return (
    <Table
      aria-label="Issue table"
      classNames={{
        base: "max-w-full",
        table: "min-w-full",
        tr: "hover:bg-default-100 transition-colors",
        th: "bg-default-200 text-default-600 font-semibold",
        td: "py-3 px-4",
      }}
    >
      <TableHeader>
        {
          column?.map((item) => (
            <TableColumn key={item.value}>
              <Link className="font-bold flex items-center text-center text-base" href={
                { query: { ...searchParams, orderBy: item.value } }
              }>{item.label}
                {item.value === searchParams.orderBy && < FaArrowUpLong size="10" />}
              </Link>
            </TableColumn>
          ))
        }
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
    </Table >
  );
}