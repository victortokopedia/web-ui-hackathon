import { Breadcrumbs, Button, Card, Container, Grid, Image } from '@nest-ui/core';
import { AddSmall } from '@nest-ui/icon';

const Home = () => {
  return (
    <>
      <div>
        <Container>
          <Breadcrumbs overflow={4}>
            <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">PC & Laptop</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Laptop</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Consumer Laptop</Breadcrumbs.Item>
            <Breadcrumbs.Item as="h1">Apple Macbook Pro 2021 M1 Max 16 512GB</Breadcrumbs.Item>
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
                  <h1>Apple Macbook Pro 2021 M1 Max 16 512GB</h1>
                  <Card css={{ padding: '1rem' }}>Product Detail</Card>
                </Grid.Col>
              </Grid>
              <section>
                <h2>ULASAN PEMBELI</h2>
                <Card css={{ padding: '1rem' }}>Content</Card>
              </section>
              <section>
                <h2>Diskusi</h2>
                <Card css={{ padding: '1rem' }}>Content</Card>
              </section>
            </Grid.Col>
            <Grid.Col span="auto">
              <div css={{ width: 268, position: 'sticky', top: 0 }}>
                <Card css={{ padding: '1rem' }}>
                  <p>Atur jumlah dan catatan</p>
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
          <h2>Lainnya di toko ini</h2>
          <Card css={{ padding: '1rem' }}>Content</Card>
        </Container>
      </section>
      <section>
        <Container>
          <h2>Produk sponsor terkait</h2>
          <Card css={{ padding: '1rem' }}>Content</Card>
        </Container>
      </section>
    </>
  );
};

export default Home;
