import { createSongObject, createSongUri } from 'electron-audio-conversion'
import dataurl from 'dataurl';
const { dialog } = require('electron').remote;

export const createSongAction = (playerIndex, song) => {
  let type;
  if(playerIndex === 1){
    type = 'AUDIO_ONE'
  } else {
    type = 'AUDIO_TWO'
  }
  return {
    type: type,
    song: song
  };
};

export const openFile = (playerIndex) => {
  return (dispatch) => {
    const file = dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'mp3', extensions: ['mp3'] }
      ]
    });
    if (file[0]) {
      dispatch(createSongAction(playerIndex, file[0]));
    }
  };
};
