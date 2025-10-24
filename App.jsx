import { useState } from 'react'
import { useConversation } from '@elevenlabs/react'
import userPhoto from './assets/user-photo.jpg'
import './App.css'

function App() {
  const [agentId, setAgentId] = useState('')
  const [isConfigured, setIsConfigured] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const conversation = useConversation()

  const handleStart = async () => {
    if (!agentId.trim()) {
      setErrorMessage('कृपया पहले Agent ID डालें!')
      return
    }
    
    setErrorMessage('')
    try {
      await conversation.startSession({
        agentId: agentId.trim(),
      })
    } catch (error) {
      console.error('Error starting conversation:', error)
      setErrorMessage('Conversation शुरू करने में समस्या आई। कृपया API key और Agent ID check करें।')
    }
  }

  const handleStop = async () => {
    await conversation.endSession()
  }

  const isConnected = conversation.status === 'connected'
  const isSpeaking = conversation.isSpeaking

  if (!isConfigured) {
    return (
      <div className="setup-container">
        <h1>🤖 AI Companion Setup</h1>
        <p className="setup-info">
          अपने ElevenLabs Agent ID को डालें:
        </p>
        <div className="setup-form">
          <input
            type="text"
            placeholder="Agent ID यहाँ डालें..."
            value={agentId}
            onChange={(e) => setAgentId(e.target.value)}
            className="agent-input"
          />
          <button 
            onClick={() => agentId.trim() && setIsConfigured(true)}
            className="setup-button"
          >
            जारी रखें
          </button>
        </div>
        <div className="setup-instructions">
          <h3>📋 Setup Instructions:</h3>
          <ol>
            <li>ElevenLabs पर जाएं और account बनाएं</li>
            <li>Conversational AI section में नया agent बनाएं</li>
            <li>Agent ID copy करें और यहाँ paste करें</li>
            <li>Environment में ELEVENLABS_API_KEY add करें</li>
          </ol>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <h1 className="title">🤖 AI Companion</h1>
      
      <div className={`avatar-container ${isSpeaking ? 'speaking' : ''} ${isConnected ? 'active' : ''}`}>
        <div className="avatar-frame">
          <img src={userPhoto} alt="AI Companion" className="avatar-image" />
          {isSpeaking && (
            <div className="pulse-rings">
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
            </div>
          )}
        </div>
      </div>

      <div className="status-container">
        <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
        </div>
        {isSpeaking && <div className="speaking-indicator">🎙️ बोल रहा है...</div>}
      </div>

      {errorMessage && (
        <div className="error-message">
          ⚠️ {errorMessage}
        </div>
      )}

      <div className="controls">
        {!isConnected ? (
          <button onClick={handleStart} className="control-button start-button">
            🎤 बात शुरू करें
          </button>
        ) : (
          <button onClick={handleStop} className="control-button stop-button">
            ⏹️ बात बंद करें
          </button>
        )}
      </div>

      <div className="info-box">
        <p>💡 <strong>कैसे इस्तेमाल करें:</strong></p>
        <ul>
          <li>बात शुरू करने के लिए माइक button दबाएं</li>
          <li>AI से बात करें जैसे किसी दोस्त से बात करते हैं</li>
          <li>AI आपकी बात सुनेगा और जवाब देगा</li>
        </ul>
      </div>
    </div>
  )
}

export default App
