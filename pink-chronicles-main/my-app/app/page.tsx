import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, BookOpen, Bookmark } from 'lucide-react'
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif text-pink-600">Bookish Beauty</h1>
            <div className="flex items-center gap-4">
              <Input 
                className="w-64 border-pink-200 focus:border-pink-400 rounded-full bg-pink-50/50"
                placeholder="Search your next favorite book..."
              />
              <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-pink-100/50 to-pink-50/30 py-16 text-center">
        <h2 className="font-serif text-4xl text-pink-800 mb-4">Discover Your Next Reading Adventure</h2>
        <p className="text-pink-600 mb-8">Curated collection of must-read books for the modern bookworm</p>
      </div>

      {/* Book Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {[
            {
              title: "Harry Potter and the Chamber of Secrets",
              author: "JK Rowling",
              cover: "/placeholder.svg?height=400&width=300",
              likes: 2.4,
            },
            {
              title: "Little Women",
              author: "Louisa May Alcott",
              cover: "/placeholder.svg?height=500&width=300",
              likes: 1.8,
            },
            {
              title: "The Secret Garden",
              author: "Frances Hodgson Burnett",
              cover: "/placeholder.svg?height=450&width=300",
              likes: 1.2,
            },
            {
              title: "Anne of Green Gables",
              author: "L.M. Montgomery",
              cover: "/placeholder.svg?height=380&width=300",
              likes: 3.1,
            },
            {
              title: "The Bell Jar",
              author: "Sylvia Plath",
              cover: "/placeholder.svg?height=420&width=300",
              likes: 2.7,
            },
            {
              title: "The Bell Jar",
              author: "Sylvia Plath",
              cover: "/placeholder.svg?height=460&width=300",
              likes: 1.9,
            },
          ].map((book, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
            >
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
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-pink-500 hover:text-pink-600 hover:bg-pink-50"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-pink-400">
          <p className="font-serif">Bookish Beauty © 2024 - For all the book lovers out there 📚</p>
        </div>
      </footer>
    </div>
  )
}

