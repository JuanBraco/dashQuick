import AuthForm from './components/auth-form'

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h1 className="header" style={{ fontSize: '4rem' }}>eloThr</h1>
          <img src="https://i.gifer.com/72uG.gif" alt="Hello there GIF" />
        </div>
        <div className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
      <footer style={{ marginTop: '20px', textAlign: 'center', width: '100%' }}>
        © Elothr Inc.
      </footer>
    </div>
  )
}