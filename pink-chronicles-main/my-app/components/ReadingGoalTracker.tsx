import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ReadingGoalTrackerProps {
  className?: string
}

export function ReadingGoalTracker({ className }: ReadingGoalTrackerProps) {
  const [booksRead, setBooksRead] = useState(5)
  const goalBooks = 20

  const progress = (booksRead / goalBooks) * 100

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Reading Goal Tracker</h3>
      <p className="text-pink-600 mb-2">You've read {booksRead} out of {goalBooks} books</p>
      <Progress value={progress} className="h-2 mb-4" />
      <div className="flex justify-between">
        <Button
          variant="outline"
          className="text-pink-600 border-pink-200 hover:bg-pink-100"
          onClick={() => setBooksRead(Math.max(0, booksRead - 1))}
        >
          Remove Book
        </Button>
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white"
          onClick={() => setBooksRead(Math.min(goalBooks, booksRead + 1))}
        >
          Add Book
        </Button>
      </div>
    </div>
  )
}

