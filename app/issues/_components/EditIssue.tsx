"use client"
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { RiEdit2Line } from 'react-icons/ri'

export default function EditIssue({ id }: { id: number }) {
  console.log(id);
  return (
    <Button
      color="primary"
      radius='sm'
      startContent={<RiEdit2Line size={16} />}
    >
      <Link href={`/issues/edit/${id}`}>
        Edit Issue
      </Link>
    </Button>
  )
}
