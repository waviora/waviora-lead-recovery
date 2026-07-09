import Link from 'next/link'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="container hero">
        <div>
          <p className="eyebrow">For restoration companies</p>
          <h1 className="h1">Never let a new lead wait.</h1>
          <p className="p">
            Waviora captures new restoration leads, alerts your team, tracks follow-up,
            and helps prevent high-value jobs from slipping through the cracks.
          </p>
          <div className="buttons">
            <Link href="/dashboard" className="btn">Open Demo Dashboard</Link>
            <Link href="/leads/new" className="btn secondary">Add Lead</Link>
          </div>
        </div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
            <strong>Lead Recovery Snapshot</strong>
            <span className="pill">Live Demo</span>
          </div>
          <div className="snap">
            <div>New Leads: 7</div>
            <div>Awaiting Response: 2</div>
            <div>Avg Response Time: 4 min</div>
            <div>Jobs Won: 3</div>
          </div>
        </div>
      </section>
    </main>
  )
}
