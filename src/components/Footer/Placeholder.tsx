import { Container, Shimmer } from '@nest-ui/core';

import { placeholderStyle } from './styles';

const FooterPlaceholder = () => (
  <div css={placeholderStyle}>
    <Container data-inner="" aria-label="footer loader" aria-hidden="true">
      <Shimmer width="100%" height={450} />
    </Container>
  </div>
);

export default FooterPlaceholder;
