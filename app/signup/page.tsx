"use client"

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())
    console.log(value)
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