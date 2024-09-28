import { Card } from "@nextui-org/react"
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
      { label: "Closed Issues", value: closed, status: "CLOSED" },
      { label: "In Progress Issues ", value: inProgress, status: "IN_PROGRESS" },
    ]
  return (
    <section className="max-w-6xl mx-auto my-10">
      <h2 className="text-xl font-semibold mb-4">Issue Summary</h2>
      <div className="flex gap-3 flex-col">
        {
          allStatuses.map((item, index) => (
            <Link href={`/issues?status=${item.status}`} key={index}>
              <div className="flex flex-wrap md:flex-row justify-between w-full items-center gap-10 border border-zinc-300 dark:border-zinc-600 rounded-lg p-5">
                <h1>
                  {item.label}
                </h1>
                <p className="text-xl font-bold mt-1">{item.value}</p>
              </div>
            </Link> 
          ))
        }
      </div>
    </section >
  )
}

export default IssueSummary;