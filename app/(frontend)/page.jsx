import FeaturedRoom from '@/components/FeaturedRoom'
import Hero from '@/components/Hero'
import HomeImage from '@/components/HomeImage'
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

        <div className="">
          <FeaturedRoom />
        </div>

        <div className="">
          <HomeImage />
        </div>
      </section>
    </main>
  )
}
