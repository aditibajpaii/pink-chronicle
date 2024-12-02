import { Button } from "@/components/ui/button"
import { Users, Calendar } from 'lucide-react'

interface BookClubSectionProps {
  className?: string
}

export function BookClubSection({ className }: BookClubSectionProps) {
  const bookClubs = [
    { name: "Classic Literature Club", members: 156, nextMeeting: "2024-03-15" },
    { name: "Mystery Lovers Unite", members: 98, nextMeeting: "2024-03-18" },
    { name: "YA Fantasy Fanatics", members: 212, nextMeeting: "2024-03-20" },
  ]

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Join a Book Club</h3>
      <div className="space-y-4">
        {bookClubs.map((club, index) => (
          <div key={index} className="flex items-center justify-between border-b border-pink-100 pb-4">
            <div>
              <h4 className="font-serif text-lg text-pink-700">{club.name}</h4>
              <p className="text-sm text-pink-600 flex items-center">
                <Users className="w-4 h-4 mr-1" /> {club.members} members
              </p>
              <p className="text-sm text-pink-600 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Next meeting: {new Date(club.nextMeeting).toLocaleDateString()}
              </p>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              Join Club
            </Button>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4 text-pink-600 border-pink-200 hover:bg-pink-100">
        View All Book Clubs
      </Button>
    </div>
  )
}

