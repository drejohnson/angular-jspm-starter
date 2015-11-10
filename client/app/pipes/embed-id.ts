import {Pipe, Inject} from 'ng-forward';

// Youtube ID
@Pipe({
  name: 'youtubeID'
})
@Inject('$sce')
class YoutubeIDPipe($sce) {
  return (url) => {
    const youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[7].length === 11) {
      return youtubeMatch[7];
    } else {
      return undefined;
    }
  };
};
