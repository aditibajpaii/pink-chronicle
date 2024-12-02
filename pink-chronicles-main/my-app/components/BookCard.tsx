import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Bookmark, Star } from 'lucide-react'
import Image from "next/image"

export interface BookCardProps {
  book: {
    title: string
    author: string
    cover: string
    likes: number
    rating: number
    category: string
  }
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      <div className="relative">
        <Image
          src={book.cover}
          alt={book.title}
          width={300}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <Button size="sm" variant="ghost" className="text-white hover:text-pink-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Read More
            </Button>
            <Button size="icon" variant="ghost" className="text-white hover:text-pink-200">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-pink-900 mb-1">{book.title}</h3>
        <p className="text-pink-600 text-sm mb-3">{book.author}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-pink-400 text-sm">
            <Heart className="w-4 h-4 mr-1 fill-current" />
            {book.likes}k
          </div>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span className="text-sm text-pink-600">{book.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

