import { Quote } from 'lucide-react'

interface QuoteOfTheDayProps {
  className?: string
}

export function QuoteOfTheDay({ className }: QuoteOfTheDayProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Quote of the Day</h3>
      <div className="flex">
        <Quote className="w-12 h-12 text-pink-300 mr-4 flex-shrink-0" />
        <blockquote className="italic text-pink-700">
          "I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library."
          <footer className="text-pink-600 mt-2 not-italic">- Jane Austen, Pride and Prejudice</footer>
        </blockquote>
      </div>
    </div>
  )
}

