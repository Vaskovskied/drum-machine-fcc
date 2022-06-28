import React, { useState } from "react";
import Display from "../Display/Display";
import VolumeControl from "../VolumeControl/VolumeControl";
import clipsDataArray from "../../constants/padsDataArray";
import DrumPad from "../DrumPad/DrumPad";
import cl from "./DrumMachine.module.css";

function DrumMachine() {
  const [status, setStatus] = useState("DANILO's DRUMMA 800-s");
  const [volume, setVolume] = useState(0.75);
  return (
    <div className={cl.mainContainer} id="drum-machine">
      <Display status={status} />
      <div className={cl.buttonsContainer}>
        {clipsDataArray.map((clip) => {
          return (
            <DrumPad
              key={clip.id}
              clip={clip}
              setStatus={setStatus}
              volume={volume}
            />
          );
        })}
      </div>
      <VolumeControl
        volume={volume}
        setVolume={setVolume}
        setStatus={setStatus}
      />
    </div>
  );
}

export default DrumMachine;
