import Nav from '@/components/Nav'

export default function Settings() {
  return (
    <main>
      <Nav />
      <section className="container" style={{maxWidth:760}}>
        <h1 style={{fontSize:42,margin:'0 0 20px'}}>Company Setup</h1>
        <div className="card form">
          {['Business Name','Emergency Phone','Notification Email','Business Hours'].map(label => (
            <label className="label" key={label}>
              {label}
              <input className="input" />
            </label>
          ))}
          <button className="btn" style={{border:0,cursor:'pointer'}}>Save Settings</button>
        </div>
      </section>
    </main>
  )
}
