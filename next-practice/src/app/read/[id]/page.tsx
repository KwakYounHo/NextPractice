import type { Metadata } from 'next'

export default function ReadOne({ params }) {
  return (
    <>
      <h2>I'm inner read with parameter</h2>
      your parameter is : { params.id }
    </>
  )
}