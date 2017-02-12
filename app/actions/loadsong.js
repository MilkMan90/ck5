import { createSongObject, createSongUri } from 'electron-audio-conversion'
import dataurl from 'dataurl';
import fs from 'fs';
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

export const createPlaylistAction = (playerIndex, folder) => {
    let type;
    if(playerIndex === 1) {
      type = 'AUDIO_ONE_PLAYLIST'
    } else {
      type = 'AUDIO_TWO_PLAYLIST'
    }
    return {
      type: type,
      folder: folder
    }
}


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

export const openDirectory = (playerIndex) => {
  return (dispatch) => {
    const file = dialog.showOpenDialog({
      properties: ['openDirectory'],
      filters: [
        { name: 'mp3', extensions: ['mp3'] }
      ]
    });
    const folder = {
      folderpath: file[0],
      filenames: []
    }
    fs.readdir(file[0], ['object'], (err, files) => {
      for (let indiv of files) {
        folder.filenames.push(indiv)
      }
      dispatch(createPlaylistAction(playerIndex, folder));
    })
  };
};
