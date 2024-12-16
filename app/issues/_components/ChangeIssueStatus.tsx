import { Select, SelectItem } from "@nextui-org/react"
import { Issue } from "@prisma/client";
import toast from "react-hot-toast";

const ChangeIssueStatus = ({ id }: { id: number | undefined }) => {

  const handleChangeIssueStatus = async (value: string) => {
    try {

      console.log(value);
      const response = await fetch(`/api/issues/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: value
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update the issue status");
      }
      toast.success(`Issue status changed to ${value}`);

    } catch (error) {
      console.error("An error occurred while changing the issue status:", error);
      toast.error("Failed to update issue status");
    }
  };



  return (
    <Select
      variant="bordered"
      size="md"
      placeholder="Update issue status"
      className="w-fulL"
      selectionMode="single"
      onChange={(e) => handleChangeIssueStatus(e.target.value)}
    >
      <SelectItem key="">All</SelectItem>
      <SelectItem key="OPEN">Open</SelectItem>
      <SelectItem key="CLOSED">Closed</SelectItem>
      <SelectItem key="IN_PROGRESS">In Progress</SelectItem>
    </Select>
  )
}

export default ChangeIssueStatus