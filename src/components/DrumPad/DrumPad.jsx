import React, {useRef, useEffect} from 'react'
import './DrumPad.css'

function DrumPad({clip, setStatus, volume}) {
  const audioTag = useRef();
  const clipBtn = useRef();

  const playSound = () => {
    audioTag.current.volume = volume;
    audioTag.current.currentTime = 0;
    audioTag.current.play();
  }

  const setShadow = () => {
    const shadowStyle = getComputedStyle(clipBtn.current).boxShadow;
    clipBtn.current.style.boxShadow = shadowStyle.replace('0.3', '0.7');
    setTimeout(() => {
      clipBtn.current.style.boxShadow = shadowStyle.replace('0.7', '0.3');
    }, 200);
  }

  const onKeyPressHandler = (e) => {
    if (e.keyCode !== clip.keyCode) return;
    playSound();
    setShadow();
    setStatus(clip.id)
  }

  const onClickHandler = () => {
    playSound();
    setShadow();
    setStatus(clip.id);
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyPressHandler)
    return () => {
      document.removeEventListener('keydown', onKeyPressHandler)
    }
  }, [volume])


  return (
    <div className={`drum-pad btn${clip.keyTrigger}`} onClick={onClickHandler} id={clip.id} ref={clipBtn} >
      <audio className="clip" id={clip.keyTrigger} src={clip.url} ref={audioTag}/>
      {clip.keyTrigger}
    </div>
  )
}

export default DrumPad