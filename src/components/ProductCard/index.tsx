import { Card, Image, Label, Typography } from '@nest-ui/core';
import { Star } from '@nest-ui/icon';
import { YN500 } from '@tokopedia/nest-color';

export interface ProductCardProps {
  id?: number;
  imgUrl?: string;
  productName?: string;
  price?: string;
  cashback?: string;
  location?: string;
  shopName?: string;
  rating?: number;
  raterCount?: number;
}

const ProductCard = (props: ProductCardProps) => {
  const { id, imgUrl, productName, price, cashback, location, shopName, rating, raterCount } = props;
  return (
    <Card data-id={id} css={{ minHeight: '100%' }}>
      <div>
        <div>
          <Image ratio="1:1" src={imgUrl} />
        </div>
        <div>
          <Typography as="div">{productName}</Typography>
          <Typography as="div">{price}</Typography>
          <div>{cashback && <Label>{cashback}</Label>}</div>
          <Typography as="div">{location}</Typography>
          <Typography as="div">{shopName}</Typography>
          {raterCount && rating ? (
            <div>
              {[...Array(Math.floor(rating)).keys()].map(each => (
                <Star key={each} color={YN500} />
              ))}
              &ensp; ({raterCount})
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
