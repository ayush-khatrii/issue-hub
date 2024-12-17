import { Select, SelectItem } from "@nextui-org/react"
import { useState } from "react";
import toast from "react-hot-toast";
import { handleApiError } from "@/utils/handleApiError";

const ChangeIssueStatus = ({
  id,
  onStatusChange,
}: {
  id: number | undefined;
  onStatusChange: (status: "OPEN" | "CLOSED" | "IN_PROGRESS") => void; // Match the state type
}) => {
  const [loading, setLoading] = useState(false);


  const handleChangeIssueStatus = async (value: "OPEN" | "CLOSED" | "IN_PROGRESS") => {
    try {
      setLoading(true);
      const response = await fetch(`/api/issues/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: value }),
      });

      await handleApiError(response);
      toast.success(`Issue status changed to ${value}`);
      onStatusChange(value);
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Select
      variant="faded"
      size="md"
      isLoading={loading}
      placeholder="Update issue status"
      className="w-full"
      selectionMode="single"
      onChange={(e) => handleChangeIssueStatus(e.target.value as "OPEN" | "CLOSED" | "IN_PROGRESS")}
    >
      <SelectItem key="OPEN">Open</SelectItem>
      <SelectItem key="CLOSED">Closed</SelectItem>
      <SelectItem key="IN_PROGRESS">In Progress</SelectItem>
    </Select>
  );
};

export default ChangeIssueStatus;
