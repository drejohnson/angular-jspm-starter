import {Pipe, Inject} from 'ng-forward';

// Check if the value is supported for the pipe
export function isString(url): boolean {
  return typeof url === 'string';
}

// Trusted
@Pipe({
  name: 'trusted'
})
export class TrustedHtml {
  $sce: any;
  constructor($sce) {
    this.$sce = $sce;
  }
  supports(url): boolean {
    return isString(url);
  }
	transform(url) {
		return (url) => this.$sce.trustAsResourceUrl(url);
	}
}
