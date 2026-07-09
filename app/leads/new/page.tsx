import Nav from '@/components/Nav'

export default function NewLead() {
  return (
    <main>
      <Nav />
      <section className="container" style={{maxWidth:760}}>
        <h1 style={{fontSize:42,margin:'0 0 8px'}}>Add New Lead</h1>
        <p className="p" style={{marginTop:0}}>MVP form. Next build connects this to a database and notifications.</p>
        <form className="card form">
          {[
            ['Customer Name','text'],
            ['Phone Number','tel'],
            ['Email','email'],
            ['Address','text']
          ].map(([label,type]) => (
            <label className="label" key={label}>
              {label}
              <input type={type} className="input" />
            </label>
          ))}
          <label className="label">
            Service Type
            <select className="select">
              <option>Water Damage</option>
              <option>Fire Damage</option>
              <option>Mold</option>
              <option>Storm</option>
              <option>Other</option>
            </select>
          </label>
          <label className="label">
            Notes
            <textarea className="textarea" />
          </label>
          <button type="button" className="btn" style={{border:0,cursor:'pointer'}}>Start Recovery</button>
        </form>
      </section>
    </main>
  )
}
