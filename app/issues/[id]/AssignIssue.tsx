"use client"
import { Select, SelectItem } from "@nextui-org/react"
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query"
import SelectSkeleton from "@/components/SelectSkeleton";
export default function AssignIssue() {


  const { isLoading, error, data: users } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      return data;
    },
    staleTime: 60 * 1000,
    retry: 3,
  });


  if (error) return null;
  if (isLoading) return <SelectSkeleton />

  return (
    <>
      <Select
        // onChange={hanadleChange}
        variant="bordered"
        label="Assign to"
        radius="sm"
        className="w-full md:w-64">
        {
          users?.map((user) => (
            <SelectItem key={user.id}>{user.name}</SelectItem>
          ))}
      </Select>
    </>
  )
}
