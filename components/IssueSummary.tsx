import { Card, Chip } from "@nextui-org/react"
import { Status } from "@prisma/client"
import Link from "next/link"

interface PROPS {
  open: number
  inProgress: number
  closed: number
}
const IssueSummary = ({ open, inProgress, closed }: PROPS) => {
  const allStatuses: {
    label: string;
    value: number;
    status: Status
  }[] = [
      { label: "Open Issues", value: open, status: "OPEN" },
      { label: "In Progress Issues ", value: inProgress, status: "IN_PROGRESS" },
      { label: "Closed Issues", value: closed, status: "CLOSED" }
    ]
  return (
    <section>
      <div className="flex justify-center w-full gap-5 items-center">
        {
          allStatuses.map((item, index) => (
            <Link href={`/issues?status=${item.status}`}>
              <Card key={index} className="px-5 py-3">
                <h1 className="text-xl">{item.label}</h1>
                <p className="text-2xl font-medium mt-1">{item.value}</p>
              </Card>
            </Link>
          ))
        }
      </div>
    </section >
  )
}

export default IssueSummary