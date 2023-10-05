import { Grid, Typography, Label } from '@nest-ui/core';
import { GN500, NN600 } from '@tokopedia/nest-color';
import { Location, Courier } from '@nest-ui/icon';

const Shipping = () => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <Typography variant="display1">
          <strong>Pengiriman</strong>
        </Typography>
      </div>
      <Grid>
        <Grid.Col span="auto">
          <Location size={16} css={{ marginTop: '-4px' }} />
        </Grid.Col>
        <Grid.Col>
          <Typography>
            Dikirim dari <strong>Jakarta Utara</strong>
          </Typography>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span="auto">
          <Courier size={16} css={{ marginTop: '-4px' }} />
        </Grid.Col>
        <Grid.Col>
          <Typography>Ongkir Same Day 8 Jam 19 rb</Typography>
          <Typography css={{ color: NN600, display: 'block' }}>Estimasi tiba besok, 11:00 - 19:00 WIB</Typography>
          <Grid>
            <Grid.Col>
              <Typography css={{ marginRight: 4 }}>Kurir lainnya:</Typography>
              <Label color="grey">Instan</Label>
            </Grid.Col>
            <Grid.Col span="auto">
              <Typography as="a" variant="display3" css={{ color: GN500, fontWeight: 'bold' }}>
                Lihat pilihan kurir
              </Typography>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <div></div>
    </div>
  );
};

export default Shipping;
