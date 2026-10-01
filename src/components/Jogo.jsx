import React, { useState } from 'react'
import './Jogo.css'

function Jogo() {
    const [emoji, setEmoji] = useState('❤️')
    let emojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💖']
    function sortear() {
        let i = Math.floor(Math.random() * 10)
        setEmoji(emojis[i])
    }

  return (
    <div className='jogo'>
          
<button onClick={sortear} className="button">
  <span className="label">{emoji}</span>
  <span className="gradient-container">
    <span className="gradient"></span>
  </span>
</button>

    </div>
    
  )
}

export default Jogo

