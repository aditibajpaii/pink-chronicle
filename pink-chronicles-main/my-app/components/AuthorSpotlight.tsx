import { Button } from "@/components/ui/button"
import Image from "next/image"

interface AuthorSpotlightProps {
  className?: string
}

export function AuthorSpotlight({ className }: AuthorSpotlightProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Author Spotlight</h3>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Author Portrait"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <h4 className="font-serif text-xl text-pink-700 mb-2">Jane Austen</h4>
          <p className="text-pink-600 mb-4">
            Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            Explore Jane Austen's Works
          </Button>
        </div>
      </div>
    </div>
  )
}

