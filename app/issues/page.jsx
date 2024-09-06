import { Button } from "@nextui-org/button"; import { Input } from "@nextui-org/react";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
export default function Issues() {
  return (
    <>
      <section className="my-10">
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
      </section>
    </>
  )
}
