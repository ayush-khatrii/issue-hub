import { Button } from "@nextui-org/button";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import IssueTable from "@/components/IssueTable";
import { Input } from "@nextui-org/react";
import prisma from "@/prisma/client";

export default async function Issues() {

  const allIssues = await prisma.issue.findMany();
  return (
    <>
      <section className="my-10 px-3">
        {/* <h1>Issues</h1> */}
        <div className="flex justify-center items-center gap-5">
          <Input
            type="email"
            width={200}
            variant="bordered"
            placeholder="Search by name..."
            radius="sm"
            startContent={<RiSearchLine />}
          />
          <Button
            variant="solid"
            radius="sm"
            color="danger"
          >
            <Link href="/issues/new-issue">
              New Issue
            </Link>
          </Button>
        </div>
        <div className="my-5">
          <IssueTable issues={allIssues} />
        </div>
      </section>
    </>
  )
}
