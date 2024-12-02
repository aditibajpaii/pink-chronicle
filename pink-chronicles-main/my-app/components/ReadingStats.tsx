import { Progress } from "@/components/ui/progress"
import { BarChart, BookOpen, Clock } from 'lucide-react'

interface ReadingStatsProps {
  className?: string
}

export function ReadingStats({ className }: ReadingStatsProps) {
  const stats = [
    { label: "Books Read", value: 12, icon: BookOpen, color: "bg-pink-500" },
    { label: "Pages Read", value: 3542, icon: BarChart, color: "bg-purple-500" },
    { label: "Reading Time", value: "86h 23m", icon: Clock, color: "bg-blue-500" },
  ]

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Your Reading Stats</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className={`${stat.color} p-3 rounded-full mr-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-pink-600">{stat.label}</p>
              <p className="text-2xl font-bold text-pink-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h4 className="font-serif text-lg text-pink-700 mb-2">Reading Goal Progress</h4>
        <Progress value={60} className="h-2 mb-2" />
        <p className="text-sm text-pink-600">12 of 20 books read</p>
      </div>
    </div>
  )
}

