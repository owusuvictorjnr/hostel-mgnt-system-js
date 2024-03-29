import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <div className="">
          <Hero />
        </div>
      </section>
    </main>
  )
}
