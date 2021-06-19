/*eslint lit/attribute-value-entities: "off" */
/*eslint spaced-comment: "off" */
import { html, TemplateResult } from 'lit-html';
import '../r3-form-text.js';

export default {
  title: 'R3FormText',
  component: 'r3-form-text',
  argTypes: {
    description: {
      control: 'description',
      description: 'Texto inferior del input',
    },
    descriptionType: {
      control: 'descriptionType',
      description: 'Cambiar el color de la descripción',
    },
    label: { control: 'label', description: 'Texto superior del input' },
    ambient: {
      control: 'ambient',
      description: 'Cambiar entre tema dark y light',
    },
    placeholder: {
      control: 'placeholder',
      description: 'Texto dentro del input',
    },
    withDescription: {
      control: 'withDescription',
      description: 'Mostrar u ocultar la descripción',
    },
    withLabel: {
      control: 'withLabel',
      description: 'Mostrar u ocultar el texto superior',
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  description?: string;
  descriptionType?: string;
  label?: string;
  ambient?: string;
  placeholder?: string;
  withDescription?: boolean;
  withLabel?: boolean;
}

const Template: Story<ArgTypes> = ({
  description = 'Default description',
  descriptionType = 'info',
  label = 'Default Text',
  ambient = 'light',
  placeholder = 'Placeholder',
  withDescription = false,
  withLabel = false,
}: ArgTypes) => html`
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap"
    rel="stylesheet"
  />

  <r3-form-text
    description="${description}"
    description-type="${descriptionType}"
    label="${label}"
    ambient="${ambient}"
    placeholder="${placeholder}"
    ?with-description="${withDescription}"
    ?with-label="${withLabel}"
  >
  </r3-form-text>
`;

export const Regular = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  withLabel: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  withDescription: true,
};

export const WarningDescription = Template.bind({});
WarningDescription.args = {
  withDescription: true,
  descriptionType: 'warning',
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  withDescription: true,
  withLabel: true,
};

export const darkAmbient = Template.bind({});
darkAmbient.args = {
  withDescription: true,
  withLabel: true,
  ambient: 'dark',
};

export const CustomText = Template.bind({});
CustomText.args = {
  withDescription: true,
  withLabel: true,
  description: 'Custom description',
  label: 'Name',
  placeholder: 'Write yout Name',
};
