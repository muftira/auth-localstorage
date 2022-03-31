import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        let user = localStorage.getItem('username')
        let pass = localStorage.getItem('password')

        if(username !== user || password !== pass ){
            setError('Oops Wrong Credentials !')
        }else {
            navigate('masuk')
        }
        
    }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="container-login">
        <p>Login</p>
        <p>Username</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
        />
        <p>Password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <div>
          <button>Login</button>
        </div>
        <div>
            <p>{error}</p>
        </div>
        <div>
          <p>
            Don't have any account yet ?{" "}
            <button onClick={() => navigate('signup')}>Register</button>{" "}
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login