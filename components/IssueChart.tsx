"use client"
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

interface PROPS {
  open: number
  inProgress: number
  closed: number
}


const IssueChart = ({ open, inProgress, closed }: PROPS) => {
  const data = [
    { label: "Opened", open: open },
    { label: "Closed", closed: closed },
    { label: "In Progress", in_progress: inProgress },
  ]
  return (
    <section className='' >
      <h2 className="text-xl font-semibold mb-4 ml-10">Issue Chart</h2>
      <ResponsiveContainer width={"100%"}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="open" fill="#ffafcc" />
          <Bar dataKey="in_progress" fill="#a2d2ff" />
          <Bar dataKey="closed" fill="#cdb4db" />
        </BarChart>
      </ResponsiveContainer>
    </section >
  )
}

export default IssueChart;