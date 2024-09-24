"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import IssueBadge from "@/components/IssueBadge";
import Link from "next/link";
import { Issue, Status } from "@prisma/client";
import { FaArrowUpLong } from "react-icons/fa6";
import CustomPagination from "./Pagination";


export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery,
  issues: Issue[],
  total: number,
  initialPage: number
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
export default function IssueTable({ issues, searchParams, total, initialPage }: Props) {


  return (
    <section className="flex items-end flex-col gap-3">
      <Table
        removeWrapper
        aria-label="Issue table"
        classNames={{
          base: "max-w-full border-2 rounded-xl border-zinc-200 shadow-sm",
          table: "min-w-full border-collapse",
          tr: "hover:bg-zinc-100 transition-colors",
          th: "bg-zinc-50 text-zinc-700 font-medium text-left py-2 px-4 border-b border-zinc-200",
          td: "py-2 px-4 text-zinc-800 border-b border-zinc-200",
        }}
      >
        <TableHeader>
          {column?.map((item) => (
            <TableColumn key={item.value}>
              <Link
                className="font-bold flex items-center text-zinc-900 text-center text-base"
                href={{ query: { ...searchParams, orderBy: item.value } }}
              >
                {item.label}
                {item.value === searchParams.orderBy && <FaArrowUpLong size="10" />}
              </Link>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {issues.map((issue: Issue) => (
            <TableRow key={issue.id} className="bg-white  hover:bg-zinc-100">
              <TableCell>
                <Link href={`/issues/${issue.id}`} className="text-zinc-900 hover:underline">
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
      <div>
        <CustomPagination total={total} initialPage={initialPage} />
      </div>
    </section>

  );
}