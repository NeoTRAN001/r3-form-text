import { html, fixture, expect, assert } from '@open-wc/testing';
import { R3FormText } from '../src/R3FormText.js';
import '../r3-form-text.js';

let el: R3FormText;

const loadComponent = async () => {
  el = await fixture<R3FormText>(html`<r3-form-text></r3-form-text>`);
  el.updateComplete;
};

describe('R3FormText', () => {
  describe('Default values', () => {
    loadComponent();

    it('Props value', async () => {
      expect(el.label).to.equal('Default Text');
      assert.typeOf(el.label, 'String');

      expect(el.placeholder).to.equal('Placeholder');
      assert.typeOf(el.placeholder, 'String');

      expect(el.description).to.equal('Default description');
      assert.typeOf(el.description, 'String');

      expect(el.withLabel).to.be.false;
      assert.typeOf(el.withLabel, 'Boolean');

      expect(el.withDescription).to.be.false;
      assert.typeOf(el.withDescription, 'Boolean');

      expect(el.ambient).to.equal('light');
      assert.typeOf(el.ambient, 'String');

      expect(el.descriptionType).to.equal('info');
      assert.typeOf(el.descriptionType, 'String');
    });
  });

  describe('Change value into props', () => {
    loadComponent();

    describe('View elements in dom', () => {
      it('When withLabel is true', async () => {
        el.withLabel = true;
        await el.updateComplete;
        const label = el.shadowRoot?.querySelector('#label')?.textContent;
        expect(label).to.equal(el.label);
      });

      it('When withDescription is true', async () => {
        el.withDescription = true;
        await el.updateComplete;
        const description =
          el.shadowRoot?.querySelector('#description')?.textContent;
        expect(description).to.equal(el.description);
      });

      it('When define custom placeholder', async () => {
        el.placeholder = 'Custom Label';
        await el.updateComplete;
        const input = el.shadowRoot?.querySelector('#input');
        expect(input?.getAttribute('placeholder')).to.equal('Custom Label');
      });

      it('When dark mode is active', async () => {
        el.ambient = 'dark';
        await el.updateComplete;
        const container = el.shadowRoot?.querySelector('.container');
        expect(container?.getAttribute('class')).to.equal('container dark');
      });

      it('When description is warning', async () => {
        el.descriptionType = 'warning';
        await el.updateComplete;
        const description = el.shadowRoot?.querySelector('#description');
        expect(description?.getAttribute('class')).to.equal('warning');
      });
    });
  });
});
