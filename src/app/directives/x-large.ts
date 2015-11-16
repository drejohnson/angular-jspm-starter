import {Directive, Inject} from 'ng-forward';

const LOG = new WeakMap();
const ATTRS = new WeakMap();
const ELEM = new WeakMap();

/**
 * Directive that places focus on the element it is applied to when the
 * expression it binds to evaluates to true
 */
@Directive({ selector: '[font-large]' })
@Inject('$log', '$attrs', '$element')
export default class XLarge {
  constructor($log, $attrs, $element) {
    LOG.set(this, $log);
    ELEM.set(this, $element);
    ATTRS.set(this, $attrs);
    LOG.get(this).log(ELEM.get(this));
  }
}
