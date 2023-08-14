import type { Metadata } from 'next'

export default function Read({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>I'm read page layout!</h1>
      { children }
    </>
  )
}