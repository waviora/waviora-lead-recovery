import Nav from '@/components/Nav'
import { demoLeads } from '@/lib/data'
import Link from 'next/link'

export default function Dashboard() {
  const stats = [['New Leads','7'],['Contacted','5'],['Awaiting Response','2'],['Won','3']]
  return (
    <main>
      <Nav />
      <section className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
          <div>
            <h1 style={{fontSize:42,margin:'0 0 8px'}}>Dashboard</h1>
            <p className="p" style={{margin:0}}>Track every restoration lead from first contact to closed job.</p>
          </div>
          <Link href="/leads/new" className="btn">Add Lead</Link>
        </div>
        <div className="grid4" style={{marginTop:32}}>
          {stats.map(([label,value]) => (
            <div className="stat" key={label}>
              <div className="statLabel">{label}</div>
              <div className="statValue">{value}</div>
            </div>
          ))}
        </div>
        <div className="card" style={{marginTop:36}}>
          <h2 style={{marginTop:0}}>Lead Pipeline</h2>
          <table className="table">
            <thead><tr><th>Customer</th><th>Service</th><th>Phone</th><th>Stage</th><th>Created</th></tr></thead>
            <tbody>
              {demoLeads.map(lead => (
                <tr key={lead.id}>
                  <td><strong>{lead.customerName}</strong></td>
                  <td>{lead.serviceType}</td>
                  <td>{lead.phone}</td>
                  <td><span className="pill">{lead.stage}</span></td>
                  <td style={{color:'rgba(255,255,255,.65)'}}>{lead.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
