import { useEffect, useState } from "react"

export default function Home() {
const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
   const userLocalStorage = localStorage.getItem('myUser')
   if (userLocalStorage) {
    setLoggedIn(true)
   }

},[])

  return (
    <>
    <h1>this is Home page</h1>
  {loggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
    </>
  )
}