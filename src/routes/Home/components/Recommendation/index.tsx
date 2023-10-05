import type { ProductCardProps } from '@/components/ProductCard';
import ProductCard from '@/components/ProductCard';
import { Grid } from '@nest-ui/core';

const products: ProductCardProps[] = [
  {
    id: 1,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/25/f5af69d8-9368-4802-b690-8d92d5f47054.jpg',
    productName: 'Metal Build Strike Rouge Ootori Striker Premium Bandai',
    price: 'Rp5.500.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4.5,
    raterCount: 2,
  },
  {
    id: 2,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/25/636cb676-b69f-4804-93a4-b1d5ef3546ca.png',
    productName: 'Metal Build Trans-Am Raiser Particle Version Tamashi Nation 2021',
    price: 'Rp8.500.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Barat',
    shopName: 'Shiro Hobby Shop',
    rating: 5,
    raterCount: 10,
  },
  {
    id: 3,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/25/ebd46202-47ab-4fba-aa82-f6a2675ac786.jpg',
    productName: 'Metal Build Evangelion EVA-01 Original Bandai',
    price: 'Rp5.700.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Timur',
    shopName: 'Toko Mainan',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 4,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/25/899019f5-f1f0-41b3-8524-4aa6dc035fe9.jpg',
    productName: 'Metal Build Evangelion EVA-02 Original Bandai',
    price: 'Rp4.500.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 5,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/25/9b06727f-f28f-4e43-8da4-7cf455109cb5.jpg',
    productName: 'Metal Build Strike Freedom Wing Of Light Option Set Soul Blue Version',
    price: 'Rp3.500.000',
    cashback: 'Cashback 10%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 6,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/9/18/f3b6ce27-d07f-44cb-90b0-c13640da73d9.jpg',
    productName: 'Lego SDCC Superman Action Comics 2015 Masih Segal',
    price: 'Rp8.900.000',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
];

const ProductSponsor: ProductCardProps[] = [
  {
    id: 1,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/product-1/2020/8/6/4135502/4135502_ca2253fd-db61-409a-bbdb-89f275140bbd_950_950',
    productName: 'HG Geirail BANDAI',
    price: 'Rp165.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4.5,
    raterCount: 2,
  },
  {
    id: 2,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/8/18/24f24aad-d799-4adf-8edf-b4dadf7ea386.jpg',
    productName: 'HG Demi Barding Bandai Original Gundam 1/144 The Witch From Mercury',
    price: 'Rp280.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 5,
    raterCount: 10,
  },
  {
    id: 3,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/9/5/93d6c2ff-6581-46cc-8fa3-08503edf40d1.png',
    productName: 'BANDAI Plamo HG 1/144 Gundam Lfrith',
    price: 'Rp245.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 4,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/9/24/aa8fec41-066c-415b-b660-072bccde1896.jpg',
    productName: 'HG Gundam Calibarn Bandai Original Gunpla 1/144 The Witch From Mercury',
    price: 'Rp450.000',
    cashback: 'Cashback 4%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 5,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/7/21/9701a20c-a21c-48ab-9b84-510974e0d1a9.jpg',
    productName: 'Unblock Max Master Original HG',
    price: 'Rp42.000',
    cashback: 'Cashback 5%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 6,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/9/18/f3b6ce27-d07f-44cb-90b0-c13640da73d9.jpg',
    productName: 'Lego SDCC Superman Action Comics 2015 Masih Segal',
    price: 'Rp8.900.000',
    cashback: 'Cashback 5%',
    location: 'Jakarta Pusat',
    shopName: 'Vortex Hobby Shop',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 7,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/2/23/ccfddd97-90f9-4545-a26c-0d5d1a0a0c9e.jpg',
    productName: 'Holmor Waterproof HG',
    price: 'Rp95.000',
    cashback: 'Cashback 5%',
    location: 'Jakarta Barat',
    shopName: 'Hello Gamis',
    rating: 4.5,
    raterCount: 2,
  },
  {
    id: 8,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/27/b08c3b32-90cc-4726-8896-02d302425550.jpg',
    productName: 'ONT HG8546M (XPON)',
    price: 'Rp245.000',
    cashback: 'Cashback 3%',
    location: 'Jakarta Pusat',
    shopName: 'Mipmahudi Store',
    rating: 5,
    raterCount: 10,
  },
  {
    id: 9,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/2/4/46d8bc52-52ea-498e-9460-cdad28c451c9.jpg',
    productName: 'sk 8730037',
    price: 'Rp209.000',
    cashback: 'Cashback 6%',
    location: 'Depok',
    shopName: 'didayuajah',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 10,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/5/10/c00cd6e8-aba8-4e79-9753-8dd92771f803.jpg',
    productName: 'HGN HG N ORI',
    price: 'Rp1.250.000',
    cashback: 'Cashback 2%',
    location: 'Meda',
    shopName: 'Kangen Waters',
    rating: 4,
    raterCount: 1,
  },
  {
    id: 11,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/9/2/d8597c3a-2751-4168-9033-027611a82e71.jpg',
    productName: 'RG God Gundam',
    price: 'Rp482.000',
    cashback: 'Cashback 5%',
    location: 'Jakarta Pusat',
    shopName: 'Hobby Japan',
    rating: 5,
    raterCount: 99,
  },
  {
    id: 12,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/8/24/ba4a6cee-0cb2-49bb-b6a1-f25f8c12e3a3.jpg',
    productName: 'RG Gundam Astray Red Frame',
    price: 'Rp900.000',
    cashback: 'Cashback 5%',
    location: 'Jakarta Barat',
    shopName: 'Vortex Hobby Shop',
    rating: 5,
    raterCount: 679,
  },
];

const Recommendation = ({ source }: { source: string }) => {
  const data = source === 'lainnya' ? products : ProductSponsor;
  return (
    <Grid align="stretch" gutterX="1rem" gutterY="1rem">
      {data.map(product => (
        <Grid.Col span={2} key={product.id}>
          <ProductCard {...product} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Recommendation;
