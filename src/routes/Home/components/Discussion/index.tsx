import { Grid, Typography, Button, Card, Image, Textarea } from '@nest-ui/core';
import { DiscussionFilled } from '@nest-ui/icon';
import { NN600, NN950 } from '@tokopedia/nest-color';

const Discussion = () => {
  return (
    <section css={{ marginTop: '3.75rem', scrollMarginTop: 200 }} id="diskusi">
      <Typography as="h2" variant="display1">
        <strong>Diskusi (2)</strong>
        <Typography as="div" variant="paragraph2" css={{ marginTop: '.5rem' }}>
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
      <Grid justify="center" css={{ marginBlock: '3rem' }}>
        <Grid.Col span="auto">
          <Image
            transparent
            width={203}
            height={116}
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/42b1f63a.svg"
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Typography css={{ textAlign: 'center' }} as="div" variant="heading5">
            Belum ada diskusi produk
          </Typography>
        </Grid.Col>
        <Grid.Col span={12} css={{ marginTop: '2rem', position: 'relative' }}>
          <Textarea rows={6} label="Apa yang ingin anda tanyakan mengenai produk ini?" />
          <Button variant="ghost" css={{ position: 'absolute', bottom: 16, right: 16 }}>
            Kirim
          </Button>
        </Grid.Col>
      </Grid>
      <Card css={{ padding: '0.75rem', marginBottom: '4rem' }}>
        <Grid justify="end">
          <Grid.Col span={5} alignSelf="middle">
            <Typography as="div" css={{ color: NN600, textAlign: 'right' }}>
              Atau hubungi langsung penjual
            </Typography>
          </Grid.Col>
          <Grid.Col span="auto" alignSelf="middle">
            <Button variant="text" color="alternate">
              <DiscussionFilled size={20} color={NN950} />
              <Typography variant="display3" color={NN950}>
                Chat Penjual
              </Typography>
            </Button>
          </Grid.Col>
        </Grid>
      </Card>
    </section>
  );
};

export default Discussion;
