/*eslint spaced-comment: "off" */
/*eslint import/extensions: "off" */
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './R3FormTextStyle';

export class R3FormText extends LitElement {
  static styles = [styles];

  @property({ type: String })
  description = 'Default description';

  @property({ type: String, attribute: 'description-type' })
  descriptionType = 'info';

  @property({ type: String })
  label = 'Default Text';

  @property({ type: String })
  ambient = 'light';

  @property({ type: String })
  placeholder = 'Placeholder';

  @property({ type: Boolean, attribute: 'with-description' })
  withDescription = false;

  @property({ type: Boolean, attribute: 'with-label' })
  withLabel = false;

  get _getDescription() {
    return this.withDescription
      ? html` <p id="description" class="${this.descriptionType}">
          ${this.description}
        </p>`
      : '';
  }

  get _getInput() {
    return html`
      <input type="text" placeholder="${this.placeholder}" id="input" />
    `;
  }

  get _getLabel() {
    return this.withLabel ? html` <label id="label">${this.label}</label>` : '';
  }

  render() {
    return html`
      <div class="container ${this.ambient}">
        ${this._getLabel} ${this._getInput} ${this._getDescription}
      </div>
    `;
  }
}
