import { useNavigate } from "react-router-dom"


export default function Login() {
  const navigate = useNavigate()

  

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = { 
      email: e.target.email.value,
      password: e.target.password.value
    }

    localStorage.setItem('myUser', JSON.stringify(formData))

    navigate('/')
  }
  return (
    <div className="container">
      <h2>this is a signup page</h2>
      <form action="submit" onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor="">
          <span>Email: </span>
          <input type="email" name="email" />
        </label>
        <span>Password: </span>
        <label htmlFor="">
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}