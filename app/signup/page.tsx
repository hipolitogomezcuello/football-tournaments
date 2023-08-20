"use client"

export default function Signup() {
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const { email, password} = Object.fromEntries(data.entries())
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const { user } = await response.json()
    console.log(user)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div  className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="text" name="password" />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </main>
  )
}