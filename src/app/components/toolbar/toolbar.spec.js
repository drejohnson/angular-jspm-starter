import ToolbarModule from './toolbar'
import ToolbarTemplate from './toolbar.html';

describe('Toolbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ToolbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Toolbar();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Template).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });
});
