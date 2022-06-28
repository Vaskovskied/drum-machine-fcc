import React from 'react'
import './VolumeControl.css'
function VolumeControl({volume, setVolume, setStatus}) {

  const onChangeHandler = (e) => {
    setVolume(e.target.value)
    setStatus(`Volume: ${Math.floor(e.target.value * 100)}`);
  }
  
  return (
      <input className='volume' type="range" step="0.01" value={volume} max='1' min='0' onChange={onChangeHandler}/>
  )
}

export default VolumeControl