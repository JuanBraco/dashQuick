import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Delos Intelligence</h1>
        <p className="">
          Welcome to Delos Intelligence app Please register with your email address.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}