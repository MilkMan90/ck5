export default function playList(state = { audioOnePlaylist: [], audioTwoPlaylist: [] }, action) {

  switch (action.type) {
    case 'AUDIO_ONE_PLAYLIST':
      return Object.assign({}, state, { audioOnePlaylist: state.audioOnePlaylist.concat(action.folder) });
    case 'AUDIO_TWO_PLAYLIST':
      return Object.assign({}, state, { audioTwoPlaylist: state.audioTwoPlaylist.concat(action.folder) });
    default:
      return state;
  }
}
