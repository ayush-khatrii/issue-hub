"use client"
import { Button, Select, SelectItem } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { Key, useState } from "react";
export default function FilterStatus() {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["All"]));
  const router = useRouter();

  const handleChange = (keys: Set<Key>) => {
    setSelectedKeys(keys);
    const status = Array.from(keys)[0] as string;
    const query = status && status !== "All" ? `?status=${status}` : "";
    router.push(`/issues${query}`);
  }


  return (
    <div className="flex justify-between gap-3">
      <Select
        variant="bordered"
        placeholder="Filter by status"
        className="max-w-xs"
        selectionMode="single"
        onSelectionChange={(value) => handleChange(value as Set<Key>)}
      >
        <SelectItem key="">All</SelectItem>
        <SelectItem key="OPEN">Open</SelectItem>
        <SelectItem key="CLOSED">Closed</SelectItem>
        <SelectItem key="IN_PROGRESS">In Progress</SelectItem>
      </Select>
      <Button
        variant="solid"
        radius="sm"
        color="danger">
        <Link href="/issues/new-issue">
          New Issue
        </Link>
      </Button>
    </div>
  )
}
