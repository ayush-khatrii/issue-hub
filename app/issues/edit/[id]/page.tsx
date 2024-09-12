import prisma from "@/prisma/client"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
const IssueForm = dynamic(
  () => import("@/app/issues/_components/IssueForm"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)
interface Props {
  params: { id: string }
}
export default async function EditIssuePage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  })
  if (!issue) return notFound();
  return (
    <section>
      <IssueForm id={issue.id} />
    </section>
  )
}
