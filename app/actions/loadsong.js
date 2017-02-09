import { createSongObject, createSongUri } from 'electron-audio-conversion'
import dataurl from 'dataurl';
const { dialog } = require('electron').remote;

export const createSongAction = (song) => {
  return {
    type: 'AUDIO_ONE',
    song: song
  };
};


export const openFile = () => {
    return (dispatch) => {
      let file = dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
          { name: 'mp3', extensions: ['mp3'] }
        ]
      });
      if(file[0]) {
       dispatch(createSongAction(file[0]))
      }
  }
}
