import React from 'react';

import { ButtonLink } from './ButtonLink';

export default {
  title: 'Components/Button',
  component: ButtonLink,
};

const Template = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Clique',
  href: "#section-form"
};