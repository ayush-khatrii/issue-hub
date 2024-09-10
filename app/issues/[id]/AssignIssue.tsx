"use client"
import { Select, SelectItem } from "@nextui-org/react"

const users = [
  { key: "1", label: "John Doe" },
  { key: "2", label: "Anne Smith" },
  { key: "3", label: "Max Mustermann" },
  { key: "4", label: "Alexandra Mustermann" },
];

export default function AssignIssue() {
  return (
    <>
      <Select variant="bordered" label="Assign to" radius="sm" className="w-full md:w-64">
        {users.map((user) => (
          <SelectItem key={user.key}>{user.label}</SelectItem>
        ))}
      </Select>
    </>
  )
}
