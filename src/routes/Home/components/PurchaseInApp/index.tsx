/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Grid, Typography, Image } from '@nest-ui/core';
import { Phone, QrCode } from '@nest-ui/icon';
import { GN500, NN100, NN600 } from '@tokopedia/nest-color';
import Modal from '@/components/Modal';
import { modalQRWrapper } from './styles';
import QRCodeImg from './assets/qrcodeimg.png';

const PurchaseInApp = () => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <Typography variant="display1">
          <strong>Beli di aplikasi, makin banyak promo!</strong>
        </Typography>
      </div>
      <Grid>
        <Grid.Col span="auto">
          <Phone size={24} css={{ color: GN500 }} />
        </Grid.Col>
        <Grid.Col>
          <Typography>Scan QR-nya untuk lihat barang ini di aplikasi Tokopedia. Bebas ongkir, lho~</Typography>
        </Grid.Col>
        <Grid.Col span="auto">
          {/* @ts-expect-error */}
          <Button size="small" variant="ghost" color="alternate" id="btn" popovertarget="popoverContent">
            <QrCode size={16} />
            Scan QR
          </Button>
        </Grid.Col>
      </Grid>
      <Modal id="popoverContent" css={modalQRWrapper}>
        <div css={{ padding: '1rem' }}>
          <Typography as="h2" variant="heading4" css={{ textAlign: 'center' }}>
            Beli di aplikasi, makin banyak promo!
          </Typography>
          <Typography as="p" css={{ textAlign: 'center' }}>
            {`Scan QR ini pakai kamera HP kamu untuk lihat "Gundam Fix Figuration Metal Co..." di aplikasi Tokopedia. Banyak promo dan bebas ongkir, lho~`}
          </Typography>
          <Grid justify="center" gutterX="1rem">
            <Grid.Col span="auto" alignSelf="middle">
              <Image alt="tokopedia app qrcode" width={148} height={150} src={QRCodeImg} />
            </Grid.Col>
            <Grid.Col span="auto" alignSelf="middle">
              <Typography as="div" css={{ width: 200, marginBottom: '1rem', textAlign: 'center' }}>
                Scan this QR or download app from:
              </Typography>
              <a css={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  width={112}
                  height={33}
                  alt="Download Tokopedia App from Google Playstore"
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/e25ec508.svg"
                />
              </a>
              <a css={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                <Image
                  width={112}
                  height={33}
                  alt="Download Tokopedia App from Appstore"
                  src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/4cc56a99.svg"
                />
              </a>
            </Grid.Col>
          </Grid>
        </div>
        <div css={{ backgroundColor: NN100, padding: '0 24px 24px', margin: '16px 0 0' }}>
          <Grid>
            <Grid.Col>
              <Typography as="h5" variant="display2" css={{ textAlign: 'center' }}>
                <strong>Cara download aplikasi dengan Scan QR</strong>
              </Typography>
            </Grid.Col>
            <Grid>
              <Grid.Col>
                <Grid>
                  <Grid.Col span="auto">
                    <Image
                      transparent
                      alt="Open camera on your phone logo"
                      width={65}
                      height={76}
                      src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9761f1b7.png"
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <div>
                      <Typography variant="display3">
                        <strong>1.</strong> Buka kamera HP-mu (iOS atau Android*)
                      </Typography>
                    </div>
                    <Typography variant="small" css={{ color: NN600 }}>
                      * Aktifkan dulu fitur Scan QR atau Google Lens di setting kameramu
                    </Typography>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
              <Grid.Col>
                <Grid>
                  <Grid.Col span="auto">
                    <Image
                      transparent
                      alt="Click notification download now logo"
                      width={65}
                      height={76}
                      src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/be54c41a.png"
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Typography variant="display3">
                      <strong>2.</strong> Klik notifikasi yang muncul untuk langsung download
                    </Typography>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
};

export default PurchaseInApp;
