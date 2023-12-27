import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <div><Link href="/blog">Blog</Link> <Link href="/blog">Products</Link></div>
}
