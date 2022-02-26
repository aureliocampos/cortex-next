import { ButtonLink } from "./ButtonLink";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink
}

const Template = ({href, label}) => <ButtonLink href={href}>{label}</ButtonLink>

export const Primary = Template.bind({});

Primary.args = {
   href: "#link",
   label: 'Button',
};