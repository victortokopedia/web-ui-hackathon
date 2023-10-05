import { GN500, NN600 } from '@tokopedia/nest-color';
import { BadgePmproFilled, Star, Clock } from '@nest-ui/icon';
import { Container, Divider, Grid, Typography, Button } from '@nest-ui/core';
import Shipping from './components/Shipping';
import Deals from './components/Deals';
import PurchaseInApp from './components/PurchaseInApp';
import Report from './components/Report';
import Review from './components/Review';
import Discussion from './components/Discussion';
import Breadcrumbs from './components/Breadcrumbs';
import Preview from './components/Preview';
import Sidebar from './components/Sidebar';
import StickyInfo from './components/StickyInfo';
import Recommendation from './components/Recommendation';
import ProductDetails from './components/ProductDetails';

const Home = () => {
  return (
    <>
      <StickyInfo />
      <div>
        <Container>
          <Breadcrumbs />
          <Grid gutterX={40}>
            <Grid.Col>
              <Grid gutterX={40}>
                <Grid.Col span="auto">
                  <Preview />
                </Grid.Col>
                <Grid.Col>
                  <ProductDetails />
                  <Divider css={{ margin: '12px 0' }} />
                  <Grid>
                    <Grid.Col span="auto">
                      <a css={{ display: 'block', width: 45, height: 45 }}>
                        <img
                          css={{ maxWidth: '100%', borderRadius: '50%' }}
                          alt="Logo From Our Garden"
                          src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2020/11/27/2a227e37-e768-4a44-84f9-d0d802eb8d78.png"
                        />
                      </a>
                    </Grid.Col>
                    <Grid.Col alignSelf="middle">
                      <div>
                        <BadgePmproFilled size={16} css={{ marginRight: '4px', marginTop: '-5px' }} />
                        <Typography variant="display1">
                          <strong>From Our Garden</strong>
                        </Typography>
                      </div>
                      <Typography css={{ color: GN500, fontWeight: 'bold' }}>
                        <span>•</span> Online
                      </Typography>
                      <Grid>
                        <Grid.Col span={5} css={{ borderRight: `1px solid #e0e0e0` }}>
                          <Star size={14} />
                          <Typography>
                            {' '}
                            4.9{' '}
                            <Typography variant="display3" css={{ color: NN600 }}>
                              rata-rata ulasan
                            </Typography>
                          </Typography>
                        </Grid.Col>
                        <Grid.Col span={7} css={{ whiteSpace: 'nowrap' }}>
                          <Clock size={14} />
                          <Typography>
                            {' '}
                            ± 48 Menit{' '}
                            <Typography variant="display3" css={{ color: NN600 }}>
                              pesanan diproses
                            </Typography>
                          </Typography>
                        </Grid.Col>
                      </Grid>
                    </Grid.Col>
                    <Grid.Col span="auto">
                      <Button variant="ghost" size="small">
                        Follow
                      </Button>
                    </Grid.Col>
                  </Grid>
                  <Divider css={{ margin: '12px 0' }} />
                  <Shipping />
                  <Divider css={{ margin: '12px 0' }} />
                  <Deals />
                  <Divider css={{ margin: '12px 0' }} />
                  <PurchaseInApp />
                  <Divider css={{ margin: '12px 0' }} />
                  <Report />
                </Grid.Col>
              </Grid>
              <Divider css={{ margin: '1rem 0 4rem' }} />
              <Review />
              <Discussion />
              <Divider css={{ margin: '1rem 0 0' }} />
            </Grid.Col>
            <Grid.Col span="auto">
              <Sidebar />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <section css={{ marginTop: '2rem' }}>
        <Container>
          <Typography as="h2" variant="heading4">
            Lainnya di toko ini
          </Typography>
          <Recommendation source="lainnya" />
        </Container>
      </section>
      <section css={{ marginTop: '3rem' }}>
        <Container>
          <Typography as="h2" variant="heading4">
            Produk sponsor terkait
          </Typography>
          <Recommendation source="product sponsor" />
        </Container>
      </section>
    </>
  );
};

export default Home;
