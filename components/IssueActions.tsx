"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Select, SelectItem } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation";
const IssueActions = () => {
  const router = useRouter();

  const handleChange = (e: any) => {
    const status = e.anchorKey;
    const query = status ? `?status=${status}` : "";
    router.push(`/issues${query}`);
  }
  return (
    <div className="flex justify-between gap-3">
      <Select
        variant="bordered"
        placeholder="Filter by status"
        className="max-w-xs"
        selectionMode="single"
        onSelectionChange={handleChange}
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

    </div >
  )
}

export default IssueActions