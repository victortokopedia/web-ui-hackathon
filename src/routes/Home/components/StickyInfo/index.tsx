import Stickybar from '@/components/Stickybar';
import { Container, Grid, Tabs, Typography } from '@nest-ui/core';
import { cssStickyInfo } from './style';

const StickyInfo = () => {
  return (
    <Stickybar stack css={cssStickyInfo}>
      <Container>
        <Grid align="middle" gutterX={40}>
          <Grid.Col span="auto">
            <Typography
              as="div"
              variant="display1"
              css={{ width: 348, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            >
              <b>Gundam Fix Figuration Metal Composite/GFF Metal Composite Wing Zero EW</b>
            </Typography>
          </Grid.Col>
          <Grid.Col>
            <Tabs css={{ marginBottom: 0 }} variant="equal">
              <Tabs.Tab>Detail Produk</Tabs.Tab>
              <Tabs.Tab>Ulasan</Tabs.Tab>
              <Tabs.Tab>Diskusi</Tabs.Tab>
              <Tabs.Tab>Rekomendasi</Tabs.Tab>
            </Tabs>
          </Grid.Col>
          <Grid.Col span="auto">
            <div css={{ width: 268 }} />
          </Grid.Col>
        </Grid>
      </Container>
    </Stickybar>
  );
};

export default StickyInfo;
