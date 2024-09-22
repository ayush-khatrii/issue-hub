"use client"

import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Issue, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import SelectSkeleton from "@/components/SelectSkeleton";
import toast from "react-hot-toast";

export default function AssignIssue({ issue }: { issue: Issue }) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(issue.assignedToUserId);

  const { isLoading, error, data: users } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    },
    staleTime: 60 * 1000,
    retry: 3,
  });

  useEffect(() => {
    setSelectedUserId(issue.assignedToUserId);
  }, [issue.assignedToUserId]);

  const handleAssignIssue = async (value: string) => {
    try {
      const response = await fetch(`/api/issues/${issue.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assignedToUserId: value || null,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the issue assignment");
      }

      setSelectedUserId(value || null);
      toast.success(`Issue ${value ? "assigned" : "unassigned"} successfully`);
    } catch (error) {
      console.error("An error occurred while updating the issue:", error);
      toast.error("Failed to update issue assignment");
    }
  };

  if (error) return <div>Error loading users</div>;
  if (isLoading) return <SelectSkeleton />;

  const selectItems = [
    <SelectItem key="" value="">Unassigned</SelectItem>,
    ...(users?.map((user) => (
      <SelectItem key={user.id} value={user.id}>
        {user.name}
      </SelectItem>
    )) || [])
  ];

  return (
    <Select
      label="Assign to"
      placeholder="Select a user"
      selectedKeys={selectedUserId ? [selectedUserId] : []}
      onChange={(e) => handleAssignIssue(e.target.value)}
      className="w-full md:w-64"
    >
      {selectItems}
    </Select>
  );
}