import { Breadcrumbs as BreadcrumbsNest } from '@nest-ui/core';

const { Item } = BreadcrumbsNest;

const Breadcrumbs = () => {
  return (
    <nav css={{ margin: '1rem 0 1.5rem' }}>
      <BreadcrumbsNest overflow={4} css={{ marginBottom: '1rem' }}>
        <Item href="#">Home</Item>
        <Item href="#">PC & Laptop</Item>
        <Item href="#">Laptop</Item>
        <Item href="#">Consumer Laptop</Item>
        <Item>Apple Macbook Pro 2021 M1 Max 16 512GB</Item>
      </BreadcrumbsNest>
    </nav>
  );
};

export default Breadcrumbs;
