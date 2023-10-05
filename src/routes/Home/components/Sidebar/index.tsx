import Stickybar from '@/components/Stickybar';
import { Anchor, Button, Card, Grid, Image, QuantityEditor, Toaster, Typography } from '@nest-ui/core';
import { AddSmall, Chat, Edit, Heart, ShareMobile } from '@nest-ui/icon';
import { NN300, NN400, YN600 } from '@tokopedia/nest-color';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const { open } = Toaster.useToaster();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
        open({ message: 'Produk berhasil ditambahkan!' });
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
    return;
  }, [loading, open]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Stickybar css={{ width: 268, paddingTop: '1.5rem', marginTop: '-1.5rem' }}>
      <Card css={{ padding: '1rem', marginBlockEnd: '1rem' }}>
        <Typography as="h3" variant="display1" css={{ margin: '0 0 1.25rem' }}>
          <b>Atur jumlah dan catatan</b>
        </Typography>
        <Grid align="middle" gutterX=".5rem">
          <Grid.Col span="auto">
            <QuantityEditor min="1" defaultValue="1" max="3" />
          </Grid.Col>
          <Grid.Col>
            Stok Total: <b css={{ color: YN600 }}>Sisa 3</b>
          </Grid.Col>
        </Grid>
        <Typography as="div" variant="display3" css={{ margin: '1rem 0' }}>
          <Anchor href="#">
            <Edit size="1rem" />
            &ensp;
            <b>Tambah Catatan</b>
          </Anchor>
        </Typography>
        <Grid align="middle" gutterX=".5rem" gutterY=".125rem" css={{ marginBlock: '1rem' }}>
          <Grid.Col span={12} css={{ textAlign: 'right' }}>
            <Typography variant="paragraph3" color={NN400}>
              <del>Rp13.500.000</del>
            </Typography>
          </Grid.Col>
          <Grid.Col>Subtotal</Grid.Col>
          <Grid.Col span="auto">
            <Typography variant="heading6">
              <b>Rp12.499.000</b>
            </Typography>
          </Grid.Col>
        </Grid>
        <Button
          block
          icon={<AddSmall aria-label="Tambah" />}
          css={{ marginBottom: '.5rem' }}
          loading={loading}
          onClick={handleClick}
        >
          Keranjang
        </Button>
        <Button block variant="ghost">
          Beli Langsung
        </Button>
        <Grid justify="center" align="stretch" gutterX={0} css={{ marginTop: '1rem', flexWrap: 'nowrap' }}>
          <Grid.Col span="auto">
            <Typography as="a" variant="paragraph3" href="#" css={{ display: 'block', paddingInline: '.75rem' }}>
              <Chat size="1rem" css={{ marginRight: '.375rem' }} />
              <b>Chat</b>
            </Typography>
          </Grid.Col>
          <div css={{ borderLeft: `1px solid ${NN300}` }} />
          <Grid.Col span="auto">
            <Typography as="a" variant="paragraph3" href="#" css={{ display: 'block', paddingInline: '.75rem' }}>
              <Heart size="1rem" css={{ marginRight: '.375rem' }} />
              <b>Wishlist</b>
            </Typography>
          </Grid.Col>
          <div css={{ borderLeft: `1px solid ${NN300}` }} />
          <Grid.Col span="auto">
            <Typography as="a" variant="paragraph3" href="#" css={{ display: 'block', paddingInline: '.75rem' }}>
              <ShareMobile size="1rem" css={{ marginRight: '.375rem' }} />
              <b>Share</b>
            </Typography>
          </Grid.Col>
        </Grid>
      </Card>
      <Image
        ratio="3:1"
        src="https://images.tokopedia.net/img/jdvdtx/2023/9/1/4e3ebd84-cef3-4b43-bef5-a9fcb5f4e60e.jpg"
        alt="lego-promo"
      />
    </Stickybar>
  );
};

export default Sidebar;
