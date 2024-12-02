import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface NewsletterProps {
  className?: string
}

export function Newsletter({ className }: NewsletterProps) {
  return (
    <div className={`bg-pink-100 rounded-lg p-8 ${className}`}>
      <h3 className="font-serif text-2xl text-pink-800 mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-pink-600 mb-6">Stay updated with the latest book recommendations and reading challenges!</p>
      <form className="flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-grow border-pink-200 focus:border-pink-400"
        />
        <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
          Subscribe
        </Button>
      </form>
    </div>
  )
}

