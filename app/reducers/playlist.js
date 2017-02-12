export default function playList(state = { audioOnePlaylist: '', audioTwoPlaylist: '' }, action) {
  switch (action.type) {
    case 'AUDIO_ONE_PLAYLIST':
      return Object.assign({}, state, { audioOnePlaylist: action.folder });
    case 'AUDIO_TWO_PLAYLIST':
      return Object.assign({}, state, { audioTwoPlaylist: action.folder });
    default:
      return state;
  }
}
