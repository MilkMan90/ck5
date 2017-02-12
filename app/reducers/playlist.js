export default function playList(state = { audioOnePlaylist: '', audioTwoPlaylist: '' }, action) {

  let folder;
  if(action.folder){
    function addFolderToFilePath(folder){
      return folder.filenames.map((file)=>{
        return folder.folderpath +'/'+ file
      })
    }
    folder = action.folder;
    folder.filepaths = addFolderToFilePath(folder)
  }

  switch (action.type) {
    case 'AUDIO_ONE_PLAYLIST':
      return Object.assign({}, state, { audioOnePlaylist: folder });
    case 'AUDIO_TWO_PLAYLIST':
      return Object.assign({}, state, { audioTwoPlaylist: folder });
    default:
      return state;
  }
}
