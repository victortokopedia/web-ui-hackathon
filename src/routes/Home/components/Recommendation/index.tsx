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
    rating: 5,
    raterCount: 10,
  },
  {
    id: 3,
    imgUrl:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2023/1/25/ebd46202-47ab-4fba-aa82-f6a2675ac786.jpg',
    productName: 'Metal Build Evangelion EVA-01 Original Bandai',
    price: 'Rp4.500.000',
    cashback: 'Cashback 4%',
    rating: 4,
    raterCount: 1,
  },
];

const Recommendation = () => {
  return (
    <Grid align="stretch" gutterX="1rem" gutterY="1rem">
      {products.map(product => (
        <Grid.Col span={2} key={product.id}>
          <ProductCard {...product} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Recommendation;
