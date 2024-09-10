import { Button } from '@nextui-org/react'
import { RiEdit2Line } from 'react-icons/ri'

export default function EditIssue() {
  return (
    <Button
      color="primary"
      radius='sm'
      startContent={<RiEdit2Line size={16} />}
    >
      Edit Issue
    </Button>
  )
}
