"use client"
import IssueBadge from '@/components/IssueBadge'
import { MdOutlineDateRange } from "react-icons/md";
import AssignIssue from '@/app/issues/[id]/AssignIssue';
import { MdPreview } from 'md-editor-rt';
import EditIssue from '@/app/issues/_components/EditIssue';
import DeleteIssue from '@/app/issues/_components/DeleteIssue';
import { Issue, User } from '@prisma/client';

interface PROPS {
  issue: Issue;
  user?: string;
}

export default function IssueDetails({ issue, user }: PROPS) {
  return (
    <section className="flex my-10 flex-col md:flex-row justify-between items-start  gap-5">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{issue.title}</h1>
        <div className="flex justify-start flex-col md:flex-row font-normal items-start py-5 gap-3">
          <IssueBadge status={issue.status} />
          <p className="flex justify-center items-center gap-1">
            <MdOutlineDateRange size={18} /> {issue.createdAt.toDateString()}
          </p>
          {/* assigned to user */}
        </div>
        <p className="font-medium">
          {
            user ? `Assigned to : ${user}` : "Issue is not assigned to anyone"
          }
        </p>
        <div className="my-10 max-w-2xl p-5 border border-zinc-500 dark:border-zinc-500 rounded">
          <MdPreview editorId={"preview-only"} modelValue={issue.description} className="rounded-md" language="en-US" />
        </div>
      </div>
      <div className="flex gap-3 flex-shrink-0 flex-col w-full md:w-auto">
        <AssignIssue issue={issue} />
        <EditIssue id={issue.id} />
        <DeleteIssue id={issue.id} />
      </div>
    </section>
  )
}
