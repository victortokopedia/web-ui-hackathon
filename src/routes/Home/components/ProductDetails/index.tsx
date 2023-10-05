import { useEffect, useState } from 'react';
import { GN500, NN300, NN600, YN300 } from '@tokopedia/nest-color';
import { StarFilled } from '@nest-ui/icon';
import { Divider, Typography, Label, Tabs, TabPanels } from '@nest-ui/core';
import { flushSync } from 'react-dom';
import { Global } from '@emotion/react';

const LabelCashback = () => {
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if ('startViewTransition' in document) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        document.startViewTransition(() => {
          flushSync(() => {
            setExpand(false);
          });
        });
      } else setExpand(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Global styles={{ '::view-transition-group(diskonlabel)': { animationDuration: '0.25s' } }} />
      <Label color="red" css={{ 'view-transition-name': 'diskonlabel', whiteSpace: 'nowrap' }}>
        {expand ? 'Diskon ' : ''}7%
      </Label>
    </>
  );
};

const ProductDetails = () => {
  const [activeKey, setActiveKey] = useState<string>('#detail');

  return (
    <>
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
        <LabelCashback />
        <Typography css={{ color: NN300, textDecoration: 'line-through', marginLeft: 4 }}>Rp13.500.000</Typography>
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
            Original Bandai Japan Version Kondisi Open For Check Only Gundam Fix Figuration Metal Composite/GFF Metal
            Composite Wing Zero Ew Very rare
          </Typography>
        </TabPanels.Panel>
        <TabPanels.Panel key="#info-penting" css={{ padding: '1rem 0' }}>
          <ul css={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li css={{ marginBottom: 16 }}>
              <Typography as="p" css={{ margin: 0 }}>
                <b>JADWAL PENGIRIMAN PEMESANAN</b>
              </Typography>
              <Typography variant="paragraph3" css={{ color: NN600 }}>
                <b>Senin - Jumat:</b> Pemesanan Gojek, Grab instan sampai jam 4.30 pm, lebih dari itu akan dikirim
                besok...
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
                Ketentuan Pengiriman (Go-Send, Grab & JNE) & Ketentuan DropshipperDear Customer yang kami hormati, demi
                kenyamanan anda berbelanja mohon untuk...
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
                Kami masih menerima reseller untuk produk Our Graden dengan slot terbatas, silahkan hubungi WA
                08176344636.
              </Typography>
            </li>
          </ul>
        </TabPanels.Panel>
      </TabPanels>
    </>
  );
};

export default ProductDetails;
