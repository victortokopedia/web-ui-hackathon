import { useState } from 'react';
import { GN500, NN300, NN600, YN300 } from '@tokopedia/nest-color';
import { StarFilled, BadgePmproFilled, Star, Clock } from '@nest-ui/icon';
import { Card, Container, Divider, Grid, Typography, Label, Tabs, TabPanels, Button } from '@nest-ui/core';
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

const Home = () => {
  const [activeKey, setActiveKey] = useState<string>('#detail');

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
                  <Typography as="h1" variant="heading6" css={{ margin: '0 0 4px' }}>
                    Gundam Fix Figuration Metal Composite/GFF Metal Composite Wing Zero EW
                  </Typography>
                  <div>
                    <Typography>
                      Terjual <Typography css={{ color: NN600 }}>1</Typography>
                    </Typography>
                    <span css={{ margin: '0 8px' }}>•</span>
                    <Typography>
                      <StarFilled size={14} css={{ color: YN300, margin: '-3px 4px 0 0' }} />5
                      <Typography css={{ color: NN600, marginLeft: '4px' }}>(1 Rating)</Typography>
                    </Typography>
                  </div>
                  <Typography variant="heading2" css={{ margin: '8px 0', display: 'block' }}>
                    <strong>Rp12.499.000</strong>
                  </Typography>
                  <div css={{ marginBottom: 16 }}>
                    <Label color="red">7%</Label>
                    <Typography css={{ color: NN300, textDecoration: 'line-through', marginLeft: 4 }}>
                      Rp13.500.000
                    </Typography>
                  </div>
                  <Divider />
                  <Tabs activeKey={activeKey} onTabClick={setActiveKey}>
                    <Tabs.Tab key="#detail">Detail</Tabs.Tab>
                    <Tabs.Tab key="#info-penting">Info Penting</Tabs.Tab>
                  </Tabs>
                  <Divider />
                  <TabPanels activeKey={activeKey}>
                    <TabPanels.Panel key="#detail" css={{ padding: '1rem 0' }}>
                      <ul css={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>
                          <Typography css={{ color: NN600, marginRight: 2 }}>Kondisi:</Typography>
                          <Typography>Baru</Typography>
                        </li>
                        <li>
                          <Typography css={{ color: NN600, marginRight: 2 }}>Min. Pemesanan:</Typography>
                          <Typography>1 Buah</Typography>
                        </li>
                        <li>
                          <Typography css={{ color: NN600, marginRight: 2 }}>Etalase:</Typography>
                          <Typography as="a" css={{ color: GN500, fontWeight: 'bold' }}>
                            Semua Etalase
                          </Typography>
                        </li>
                      </ul>
                      <Typography as="p">
                        Original Bandai Japan Version Kondisi Open For Check Only Gundam Fix Figuration Metal
                        Composite/GFF Metal Composite Wing Zero Ew Very rare
                      </Typography>
                    </TabPanels.Panel>
                    <TabPanels.Panel key="#info-penting" css={{ padding: '1rem 0' }}>
                      <ul css={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li css={{ marginBottom: 16 }}>
                          <Typography as="p" css={{ margin: 0 }}>
                            <b>JADWAL PENGIRIMAN PEMESANAN</b>
                          </Typography>
                          <Typography variant="paragraph3" css={{ color: NN600 }}>
                            <b>Senin - Jumat:</b> Pemesanan Gojek, Grab instan sampai jam 4.30 pm, lebih dari itu akan
                            dikirim besok...
                            <Typography as="a" variant="paragraph3" css={{ color: GN500, fontWeight: 'bold' }}>
                              Selengkapnya
                            </Typography>
                          </Typography>
                        </li>
                        <li css={{ marginBottom: 16 }}>
                          <Typography as="p" css={{ margin: 0 }}>
                            <b>Ketentuan Pengiriman (Go-Send, Grab & JNE) & Ketentuan Dropshipper</b>
                          </Typography>
                          <Typography variant="paragraph3" css={{ color: NN600 }}>
                            Ketentuan Pengiriman (Go-Send, Grab & JNE) & Ketentuan DropshipperDear Customer yang kami
                            hormati, demi kenyamanan anda berbelanja mohon untuk...
                            <Typography as="a" variant="paragraph3" css={{ color: GN500, fontWeight: 'bold' }}>
                              Selengkapnya
                            </Typography>
                          </Typography>
                        </li>
                        <li css={{ marginBottom: 16 }}>
                          <Typography as="p" css={{ margin: 0 }}>
                            <strong>Reseller</strong>
                          </Typography>
                          <Typography variant="paragraph3" css={{ color: NN600 }}>
                            Kami masih menerima reseller untuk produk Our Graden dengan slot terbatas, silahkan hubungi
                            WA 08176344636.
                          </Typography>
                        </li>
                      </ul>
                    </TabPanels.Panel>
                  </TabPanels>
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
      <section>
        <Container>
          <Typography as="h2" variant="heading4">
            Lainnya di toko ini
          </Typography>
          <Recommendation source="lainnya" />
        </Container>
      </section>
      <section>
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
