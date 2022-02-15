import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from 'recharts'

const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10,
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12,
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10,
  },
  {
    name: 'Java',
    student: 10,
    fees: 5,
  },
  {
    name: 'C#',
    student: 9,
    fees: 4,
  },
  {
    name: 'C++',
    student: 10,
    fees: 8,
  },
]

const ActivityChart = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h6 className="text-lg font-semibold">Activiy Chart</h6>
        <ul className="flex items-center space-x-2 rounded border p-1 text-xs">
          <li>
            <div className="cursor-pointer rounded-md bg-gray-100/80 px-3 py-2 font-poppins">
              Dashboards
            </div>
          </li>
          <li>
            <div className="cursor-pointer rounded-md px-3 py-2 transition-all duration-200 hover:bg-gray-100/80">
              Crafted
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={pdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="student" barSize={10} fill="#8884d8" />
            <Bar dataKey="fees" barSize={10} fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ActivityChart
