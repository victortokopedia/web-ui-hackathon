import { Grid, Typography, Button, Card } from '@nest-ui/core';
import { DiscussionFilled } from '@nest-ui/icon';

const Discussion = () => {
  return (
    <section css={{ marginTop: 60 }}>
      <Typography as="h2" variant="display1">
        <strong>Diskusi (2)</strong>
        <Typography as="span" variant="paragraph2" css={{ display: 'block', marginTop: '.5rem' }}>
          Gundam Fix Figuration Metal Composite/GFF Metal Composite Wing Zero EW
        </Typography>
      </Typography>
      <Card css={{ padding: '1rem' }}>
        <Grid>
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
      </Card>
    </section>
  );
};

export default Discussion;
