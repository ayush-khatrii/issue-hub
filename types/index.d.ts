// issue type
declare type IssueType = {
  id: number;
  title: string;
  description: string;
  status: "OPEN" | "IN_PROGRESS" | "CLOSED";
  createdAt: Date;
  updatedAt: Date;
  assignedToUserId?: string;
};

// create issue type
declare type CreateIssueType = {
  title: string;
  description: string;
  status?: "OPEN" | "IN_PROGRESS" | "CLOSED";
  path: string;
};
