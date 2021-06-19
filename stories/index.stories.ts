import { html, TemplateResult } from 'lit-html';
import '../r3-form-text.js';

export default {
  title: 'R3FormText',
  component: 'r3-form-text',
  argTypes: {
    description: { description: 'Texto inferior del input' },
    descriptionType: {control: 'descriptionType'},
    label: { control: 'label' },
    mode: {control: 'mode'},
    placeholder: { control: 'placeholder' },
    withDescription: { control: 'withDescription' },
    withLabel: { control: 'withLabel' },
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
  mode?: string;
  placeholder?: string;
  withDescription?: boolean;
  withLabel?: boolean;
}

const Template: Story<ArgTypes> = ({
  description = 'Default description',
  descriptionType = 'info',
  label = 'Default Text',
  mode = 'light',
  placeholder = 'Placeholder',
  withDescription = false,
  withLabel = false,
}: ArgTypes) => html`
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap" rel="stylesheet">
  
  <r3-form-text
    description="${description}"
    description-type="${descriptionType}"
    label="${label}"
    mode="${mode}"
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
}

export const WarningDescription = Template.bind({});
WarningDescription.args = {
  withDescription: true,
  descriptionType: 'warning'
}

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  withDescription: true,
  withLabel: true,
}

export const darkMode = Template.bind({});
darkMode.args = {
  withDescription: true,
  withLabel: true,
  mode: 'dark'
}

export const CustomText = Template.bind({});
CustomText.args = {
  withDescription: true,
  withLabel: true,
  description: 'Custom description',
  label: 'Name',
  placeholder: 'Write yout Name'
}