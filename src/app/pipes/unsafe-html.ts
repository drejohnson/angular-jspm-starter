import {Pipe, Inject} from 'ng-forward';

// Check if the value is supported for the pipe
export function isString(val): boolean {
  return typeof val === 'string';
}

// Trusted
@Pipe({
  name: 'unsafe'
})
@Inject('$sce')
export class Unsafe {
  $sce: any;
  constructor($sce) {
    this.$sce = $sce;
  }
  supports(val): boolean {
    return isString(val);
  }
	transform(val) {
		return (val) => this.$sce.trustAsHtml(val);
	}
}
