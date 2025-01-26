import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div className='text-center justify'>
      <h1>hello there</h1>
      <Link href="/notes">notes Page</Link>
    </div>
  )
}

export default page
