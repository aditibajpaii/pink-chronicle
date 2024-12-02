import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface VirtualBookshelfProps {
  className?: string
  books: any[]
}

export function VirtualBookshelf({ className, books }: VirtualBookshelfProps) {
  const [currentShelf, setCurrentShelf] = useState(0)
  const booksPerShelf = 5
  const totalShelves = Math.ceil(books.length / booksPerShelf)

  const displayedBooks = books.slice(currentShelf * booksPerShelf, (currentShelf + 1) * booksPerShelf)

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Your Virtual Bookshelf</h3>
      <div className="flex justify-center items-end space-x-2 mb-4">
        {displayedBooks.map((book, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={book.cover}
              alt={book.title}
              width={60}
              height={90}
              className="w-12 shadow-md transition-transform duration-200 hover:scale-110"
            />
            <div className="w-12 h-2 bg-pink-200 mt-2"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          className="text-pink-600 border-pink-200 hover:bg-pink-100"
          onClick={() => setCurrentShelf((prev) => Math.max(0, prev - 1))}
          disabled={currentShelf === 0}
        >
          Previous Shelf
        </Button>
        <Button
          variant="outline"
          className="text-pink-600 border-pink-200 hover:bg-pink-100"
          onClick={() => setCurrentShelf((prev) => Math.min(totalShelves - 1, prev + 1))}
          disabled={currentShelf === totalShelves - 1}
        >
          Next Shelf
        </Button>
      </div>
    </div>
  )
}

