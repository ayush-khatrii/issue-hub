import { auth } from '@/auth';
import prisma from '@/prisma/client'
import { getSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'
import IssueDetails from '../_components/IssueDetails';

type Props = {
  params: { id: string }
}

const getIssue = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId } }));

export default async function SingleIssuePage({ params }: Props) {
  // const session = await auth()

  const issue = await getIssue(parseInt(params.id));

  if (!issue) return notFound();

  return (
    <section className='px-5'>
      <IssueDetails issue={issue} />
    </section>
  )
}
