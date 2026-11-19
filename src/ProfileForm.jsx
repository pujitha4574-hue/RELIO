import { useState } from 'react'

function ProfileForm() {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="profile-page">
      <div className="profile-form">
        <h2>Your details</h2>
        <input
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Role (e.g. CSE Student)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="preview">
        <h2>{name || 'Your Name'}</h2>
        <p>{title || 'Your role'}</p>
        <p>{email || 'you@example.com'}</p>
      </div>
    </div>
  )
}

export default ProfileForm