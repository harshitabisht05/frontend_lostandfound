// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Lost & Found</h1>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">Signup</Link></li>
        <li><Link href="/post-lost">Post Lost</Link></li>
        <li><Link href="/post-found">Post Found</Link></li>
        <li><Link href="/search">Search</Link></li>
      </ul>
    </nav>
  );
}
