import { Button } from "@/components/ui/button"
import { Trophy, Clock, Book } from 'lucide-react'

interface ReadingChallengesProps {
  className?: string
}

export function ReadingChallenges({ className }: ReadingChallengesProps) {
  const challenges = [
    { name: "30 Books in 30 Days", icon: Book, participants: 1243, daysLeft: 12 },
    { name: "Diverse Authors Challenge", icon: Trophy, participants: 876, daysLeft: 45 },
    { name: "Classics Marathon", icon: Clock, participants: 654, daysLeft: 60 },
  ]

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Reading Challenges</h3>
      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div key={index} className="flex items-center justify-between border-b border-pink-100 pb-4">
            <div className="flex items-center">
              <challenge.icon className="w-8 h-8 text-pink-500 mr-3" />
              <div>
                <h4 className="font-serif text-lg text-pink-700">{challenge.name}</h4>
                <p className="text-sm text-pink-600">{challenge.participants} participants</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-pink-600">{challenge.daysLeft} days left</p>
              <Button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white">
                Join Challenge
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4 text-pink-600 border-pink-200 hover:bg-pink-100">
        View All Challenges
      </Button>
    </div>
  )
}

