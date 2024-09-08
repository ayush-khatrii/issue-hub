import prisma from '@/prisma/client'
import React, { cache } from 'react'

type Props = {
  params: { id: string }
}

const getIssue = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId } }));

export default async function SingleIssuePage({ params }: Props) {
  const issue = await getIssue(parseInt(params.id));
  console.log(issue);
  return (
    <section>
      SingleIssuePage {params.id}
      
    </section>
  )
}
