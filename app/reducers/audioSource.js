export default function audioSource(state = { audioOne: '', audioTwo: '' }, action) {
  console.log(action);
  switch (action.type) {
    case 'AUDIO_ONE':
      return Object.assign({}, state, {audioOne: action.song});
    case 'AUDIO_TWO':
      return Object.assign({}, state, {audioTwo: action.song});
    default:
      return state;
  }
}
