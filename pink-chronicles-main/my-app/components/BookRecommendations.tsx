import { Button } from "@/components/ui/button"
import { BookCard } from "./BookCard"

interface BookRecommendationsProps {
  className?: string
  books: any[]
}

export function BookRecommendations({ className, books }: BookRecommendationsProps) {
  const recommendedBooks = books.slice(0, 4) // Just using the first 4 books for demonstration

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Recommended for You</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recommendedBooks.map((book, index) => (
          <BookCard key={index} book={book} viewMode="grid" />
        ))}
      </div>
      <Button variant="outline" className="w-full mt-6 text-pink-600 border-pink-200 hover:bg-pink-100">
        See More Recommendations
      </Button>
    </div>
  )
}

