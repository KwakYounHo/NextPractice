import type { Metadata } from 'next'

export default function Layout( {children }: { children: React.ReactNode }) {
  return (
    <form>
      <h2>Creating Something</h2>
      i'm creating
      { children }
    </form>
  )
}