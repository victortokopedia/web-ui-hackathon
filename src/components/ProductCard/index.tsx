/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Card, Image, Label } from '@nest-ui/core';
import { BadgePmproFilled, StarFilled } from '@nest-ui/icon';
import { YN300 } from '@tokopedia/nest-color';
import { useState } from 'react';
import {
  cssBadge,
  cssContainer,
  cssGrid,
  cssImgWrapper,
  cssPrice,
  cssProductInfo,
  cssProductName,
  cssRating,
  cssRatingStar,
  cssShopInfo,
} from './style';

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

  const [showShop, setShowShop] = useState(false);

  const handleHover = () => {
    setShowShop(true);
  };

  const handleBlur = () => {
    setShowShop(false);
  };

  return (
    <div data-id={id} css={cssContainer}>
      <Card css={{ height: '100%' }} onMouseEnter={handleHover} onMouseLeave={handleBlur}>
        <div css={cssGrid}>
          <div css={cssImgWrapper}>
            <Image ratio="1:1" src={imgUrl} />
          </div>
          <div css={cssProductInfo}>
            <div css={cssProductName}>{productName}</div>
            <div css={cssPrice}>{price}</div>
            <div css={{ marginBottom: '.25rem' }}>{cashback && <Label>{cashback}</Label>}</div>
            {location && shopName && (
              <>
                <div css={cssShopInfo}>
                  <BadgePmproFilled css={cssBadge} />
                  <span>{showShop ? location : shopName}</span>
                </div>
              </>
            )}
            {raterCount && rating ? (
              <div css={cssRating}>
                {[...Array(Math.floor(rating)).keys()].map(each => (
                  <StarFilled size={12} css={cssRatingStar} key={each} color={YN300} />
                ))}
                <span>&nbsp;({raterCount})</span>
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
