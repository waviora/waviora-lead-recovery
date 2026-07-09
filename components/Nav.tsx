import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">Waviora Lead Recovery</Link>
      <div className="navlinks">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/leads/new">Add Lead</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  )
}
