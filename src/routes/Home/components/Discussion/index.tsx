import { Grid, Typography, Button } from '@nest-ui/core';
import { DiscussionFilled } from '@nest-ui/icon';
import { NN300 } from '@tokopedia/nest-color';

const Discussion = () => {
  return (
    <section css={{ marginTop: 60 }}>
      <Typography as="h2" variant="display1">
        <strong>Diskusi (2)</strong>
        <Typography as="span" variant="paragraph2" css={{ display: 'block', marginTop: '.5rem' }}>
          Gundam Fix Figuration Metal Composite/GFF Metal Composite Wing Zero EW
        </Typography>
      </Typography>
      <Grid css={{ border: `1px solid ${NN300}`, borderRadius: 8, padding: 16 }}>
        <Grid.Col span="auto" alignSelf="middle">
          <DiscussionFilled />
        </Grid.Col>
        <Grid.Col alignSelf="middle">
          <Typography>Ada pertanyaan? Diskusikan dengan penjual atau pengguna lain</Typography>
        </Grid.Col>
        <Grid.Col span="auto" alignSelf="middle">
          <Button>Tulis Pertanyaan</Button>
        </Grid.Col>
      </Grid>
    </section>
  );
};

export default Discussion;
