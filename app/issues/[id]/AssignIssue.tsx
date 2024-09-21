"use client"
import { Select, SelectItem } from "@nextui-org/react"
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

export default function AssignIssue() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllUsers();
  }, []);

  function hanadleChange() {
    try {
      // assign issue to user
      alert("Issue assigned successfully");
    } catch (error) {
      // handle error
      console.error(error);
    }
  }

  return (
    <>
      <Select
        onChange={hanadleChange}
        variant="bordered"
        label="Assign to"
        radius="sm"
        className="w-full md:w-64">
        {users.map((user) => (
          <SelectItem key={user.id}>{user.name}</SelectItem>
        ))}
      </Select>
    </>
  )
}
