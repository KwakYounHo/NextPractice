import type { Metadata } from 'next'

interface Params {
  id: number
}
export default function ReadOne({ params }: { params: Params }) {
  return (
    <>
      <h2>I&apos;m inner read with parameter</h2>
      your parameter is : { params.id }
    </>
  )
}