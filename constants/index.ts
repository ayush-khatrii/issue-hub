import { Issue } from "@prisma/client";

export const column: { label: string; value: keyof Issue }[] = [
  {
    label: "Issue",
    value: "title",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Created",
    value: "createdAt",
  },
];
