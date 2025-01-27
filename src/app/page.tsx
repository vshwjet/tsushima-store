import Navigation from "./components/Navigation"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-cover text-white">
      <Navigation />
      <Hero />
    </main>
  )
}

