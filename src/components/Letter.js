import React from 'react'

function Letter({ letterPos, attemptValue }) {
  const letter = board[attemptValue] [letterPos];
  return (
    <div className='letter'></div>
  )
}

export default Letter