import { Button } from "@/components/ui/button"
import { Repeat } from 'lucide-react'

interface BookSwapProps {
  className?: string
}

export function BookSwap({ className }: BookSwapProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Book Swap Corner</h3>
      <p className="text-pink-600 mb-4">
        Exchange books with fellow readers! List your books for swap or browse available titles.
      </p>
      <div className="flex justify-between items-center">
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
          <Repeat className="w-4 h-4 mr-2" />
          Start Swapping
        </Button>
        <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-100">
          Browse Available Books
        </Button>
      </div>
    </div>
  )
}

