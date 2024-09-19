"use client"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const IssuesLoading = () => {
  const exampleIssue = [1, 2, 3, 4, 5]
  return (
    <section className="my-10 px-3">
      <Table
        // className="border" 
        removeWrapper
        isHeaderSticky
      >
        <TableHeader className="">
          <TableColumn className="text-base text-black">Issue</TableColumn>
          <TableColumn className="text-base text-black">Status</TableColumn>
          <TableColumn className="text-base text-black">Created At</TableColumn>
        </TableHeader>
        <TableBody
        >
          {
            exampleIssue.map((issue: number) => (
              <TableRow key={issue} className="border hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm">
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table >
    </section>
  )
}

export default IssuesLoading