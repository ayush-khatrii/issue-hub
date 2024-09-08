"use client"
import { Chip, ChipProps } from '@nextui-org/react'

type Status = "OPEN" | "CLOSED" | "IN_PROGRESS";
type Color = ChipProps['color'];

export default function IssueBadge({ status }: { status: Status }) {

  const issueStatusMap: Record<Status, { label: string, color: Color }> = {
    OPEN: { label: "Open", color: "secondary" },
    CLOSED: { label: "Closed", color: "success" },
    IN_PROGRESS: { label: "In Progress", color: "primary" },
  };

  return (
    <Chip
      variant='flat'
      key={status}
      color={issueStatusMap[status].color}
    >
      {issueStatusMap[status].label}
    </Chip>
  )
}
