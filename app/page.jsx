'use client'
import { useChat } from 'ai/react'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      color: '#00ff99',
      minHeight: '100vh',
      fontFamily: 'Courier New, monospace',
      padding: '20px'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '28px' }}>👾 LucasIAdu13 👾</h1>

      <div style={{ marginTop: '30px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <strong>{m.role === 'user' ? '🧑 Toi' : '🤖 IA'}:</strong> {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Tape ton message ici..."
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#1a1a1a',
            color: '#00ff99',
            border: '1px solid #00ff99',
            borderRadius: '5px'
          }}
        />
      </form>
    </div>
  )
}
