import { Breadcrumbs, Button, Card, Container, Divider, Grid, Image, Typography } from '@nest-ui/core';
import { AddSmall } from '@nest-ui/icon';

const Home = () => {
  return (
    <>
      <div>
        <Container>
          <Breadcrumbs overflow={4} css={{ marginBottom: '1rem' }}>
            <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">PC & Laptop</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Laptop</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Consumer Laptop</Breadcrumbs.Item>
            <Breadcrumbs.Item>Apple Macbook Pro 2021 M1 Max 16 512GB</Breadcrumbs.Item>
          </Breadcrumbs>
          <Grid gutterX={40}>
            <Grid.Col>
              <Grid gutterX={40}>
                <Grid.Col span="auto">
                  <div css={{ width: 348 }}>
                    <Image ratio="1:1" src="" alt="" />
                  </div>
                </Grid.Col>
                <Grid.Col>
                  <Typography as="h1" variant="heading6">
                    Apple Macbook Pro 2021 M1 Max 16 512GB
                  </Typography>
                  <Card css={{ padding: '1rem' }}>Product Detail</Card>
                </Grid.Col>
              </Grid>
              <Divider css={{ margin: '1rem 0 4rem' }} />
              <section>
                <Typography as="h2" variant="display1" css={{ margin: '0 0 1.25rem' }}>
                  <strong>ULASAN PEMBELI</strong>
                </Typography>
                <Card css={{ padding: '1rem' }}>Content</Card>
              </section>
              <section>
                <Typography as="h2" variant="Display1">
                  <strong>Diskusi (2)</strong>
                  <Typography as="span" variant="paragraph2" css={{ display: 'block', marginTop: '.5rem' }}>
                    Apple Macbook Pro 2021 M1 Max 16 512GB
                  </Typography>
                </Typography>
                <Card css={{ padding: '1rem' }}>Content</Card>
              </section>
              <Divider css={{ margin: '1rem 0 0' }} />
            </Grid.Col>
            <Grid.Col span="auto">
              <div css={{ width: 268, position: 'sticky', top: 0 }}>
                <Card css={{ padding: '1rem' }}>
                  <Typography as="h3" variant="display1" css={{ margin: '0 0 1.25rem' }}>
                    <strong>Atur jumlah dan catatan</strong>
                  </Typography>
                  <Button block icon={<AddSmall aria-label="Tambah" />} css={{ marginBottom: '.5rem' }}>
                    Keranjang
                  </Button>
                  <Button block variant="ghost">
                    Beli Langsung
                  </Button>
                </Card>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <section>
        <Container>
          <Typography as="h2" variant="heading4">
            Lainnya di toko ini
          </Typography>
          <Card css={{ padding: '1rem' }}>Content</Card>
        </Container>
      </section>
      <section>
        <Container>
          <Typography as="h2" variant="heading4">
            Produk sponsor terkait
          </Typography>
          <Card css={{ padding: '1rem' }}>Content</Card>
        </Container>
      </section>
    </>
  );
};

export default Home;
