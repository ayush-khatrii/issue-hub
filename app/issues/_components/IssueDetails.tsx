"use client"
import IssueBadge from '@/components/IssueBadge'
import Markdown from 'react-markdown'
import { MdOutlineDateRange } from "react-icons/md";
import AssignIssue from '@/app/issues/[id]/AssignIssue';
import { MdPreview } from 'md-editor-rt';
import EditIssue from '@/app/issues/_components/EditIssue';
import DeleteIssue from '@/app/issues/_components/DeleteIssue';


export default function IssueDetails({ issue }: { issue: IssueType }) {
  return (
    <section className="flex my-10 flex-col md:flex-row justify-between items-start  gap-5">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{issue.title}</h1>
        <div className="flex justify-start font-normal items-center py-5 gap-3">
          <IssueBadge status={issue.status} />
          <p className="flex justify-center items-center gap-1">
            <MdOutlineDateRange size={18} /> {issue.createdAt.toDateString()}
          </p>
        </div>
        <div className="my-10 max-w-2xl p-5 border border-zinc-500 dark:border-zinc-500 rounded">
          <MdPreview editorId={"preview-only"} modelValue={issue.description} className="rounded-md" language="en-US" />
        </div>
      </div>
      <div className="flex gap-3 flex-shrink-0 flex-col w-full md:w-auto">
        <AssignIssue />
        <EditIssue />
        <DeleteIssue id={issue.id} />
      </div>
    </section>
  )
}