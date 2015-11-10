import {Pipe} from 'ng-forward';

// Check if the value is supported for the pipe
export function isString(val): boolean {
  return typeof val === 'string';
}

@Pipe('toUpperCase')
export class ToUpperCase {
	supports(val): boolean {
    return isString(val);
  }

	transform(val) {
		return val.toUpperCase();
	}
}
