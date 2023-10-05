import { Grid, Typography } from '@nest-ui/core';
import { Warning } from '@nest-ui/icon';
import { NN600 } from '@tokopedia/nest-color';

const Report = () => {
  return (
    <Grid>
      <Grid.Col>
        <Typography variant="display3" css={{ color: NN600 }}>
          Ada masalah dengan produk ini?
        </Typography>
      </Grid.Col>
      <Grid.Col span="auto">
        <Typography variant="display3">
          <Warning size={16} css={{ marginTop: '-2px', marginRight: '4px' }} />
          <strong>Laporkan</strong>
        </Typography>
      </Grid.Col>
    </Grid>
  );
};

export default Report;
