import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextComponentType } from 'next'

const Header: NextComponentType = () => {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <header>
      <Link href="/">
        <a className={router.pathname === '/' ? 'is-active' : ''}>Home</a>
      </Link>{' '}
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'is-active' : ''}>About</a>
      </Link>
    </header>
  )
}

export default Header
