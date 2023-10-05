import { Breadcrumbs as BreadcrumbsNest } from '@nest-ui/core';

const { Item } = BreadcrumbsNest;

const Breadcrumbs = () => {
  return (
    <nav css={{ margin: '1rem 0 1.5rem' }}>
      <BreadcrumbsNest overflow={5} css={{ marginBottom: '1rem' }}>
        <Item href="#">Home</Item>
        <Item href="#">Mainan & Hobi</Item>
        <Item href="#">Model Kit</Item>
        <Item href="#">Mecha Model (Gunpla)</Item>
        <Item>Gundam Fix Figuration Metal Composite/GFF Metal Composite Wing Zero EW</Item>
      </BreadcrumbsNest>
    </nav>
  );
};

export default Breadcrumbs;
