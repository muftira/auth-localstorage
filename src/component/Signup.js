import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)

        navigate('/')
    }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="container-login">
        <p>Create Account</p>
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
        <p>Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
            required
        />
        <div>
          <button >Register</button>
        </div>
      </form>
    </div>
  )
}

export default Signup