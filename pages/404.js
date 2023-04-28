import React from 'react'
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div>
        <h1>Page Not Found</h1>
        <h3>This page is not exist. Please check if you have enter a correct URL. </h3>
        <Link href="/">Click here to go back to home page. </Link>
    </div>
  )
}

export default PageNotFound;