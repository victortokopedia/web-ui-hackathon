import { CssFontface } from '@nest-ui/core';

const FontFace = () => (
  <CssFontface
    fontFamily="Open Sauce One"
    variants={[
      {
        src: [{ url: 'https://assets.tokopedia.net/asts/unify/fonts/OpenSauceOne-Regular.woff2', format: 'woff2' }],
        fontWeight: 400,
        fontDisplay: 'swap',
      },
      {
        src: [{ url: 'https://assets.tokopedia.net/asts/unify/fonts/OpenSauceOne-ExtraBold.woff2', format: 'woff2' }],
        fontWeight: 800,
        fontDisplay: 'swap',
      },
    ]}
  />
);

export default FontFace;
