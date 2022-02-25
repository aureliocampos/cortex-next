import "../src/styles/globals.css";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  customSmallMobile: {
    name: 'Small mobile',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  customLargeMobile: {
    name: 'Large Mobile',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  customTablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  customNotebook: {
    name: 'Notebook',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
}