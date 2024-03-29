import Hero from '@/components/Hero'
import SearchRooms from '@/components/SearchRooms'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <div className="">
          <Hero />
        </div>

        <div className="">
          <SearchRooms />
        </div>
      </section>
    </main>
  )
}
