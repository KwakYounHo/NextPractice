import type { Metadata } from 'next'

interface Params {
  [keys: string]: number
}
export default function ReadOne({ params }: { params: Params }) {
  return (
    <>
      <h2>I'm inner read with parameter</h2>
      your parameter is : { params.id }
    </>
  )
}