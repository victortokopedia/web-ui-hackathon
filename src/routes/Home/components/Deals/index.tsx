import { Grid, Image, Typography } from '@nest-ui/core';
import { GN500 } from '@tokopedia/nest-color';

const Deals = () => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <Typography variant="display1">
          <strong>Penawaran Lainnya</strong>
        </Typography>
      </div>
      <Grid>
        <Grid.Col span="auto">
          <Image
            width={24}
            height={24}
            transparent
            alt="Paylater dan cicilan"
            src="https://images.tokopedia.net/pdp/info/icon/pdp-paylatercicilan@3x.png"
          />
        </Grid.Col>
        <Grid.Col>
          <Typography css={{ display: 'block' }}>
            <strong>Paylater & Cicilan</strong>
          </Typography>
          <Typography>
            Beli sekarang bayar nanti, mulai Rp1.309.962/bulan{' '}
            <Typography as="a" variant="display3" css={{ color: GN500, fontWeight: 'bold' }}>
              Selengkapnya
            </Typography>
          </Typography>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Deals;
