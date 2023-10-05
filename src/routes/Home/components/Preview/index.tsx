/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unknown-property */
import Stickybar from '@/components/Stickybar';
import { HorizontalSlider, Image } from '@nest-ui/core';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import { Global } from '@emotion/react';
import { GN600, NN0 } from '@tokopedia/nest-color';
import useHoverZoom from './useHoverZoom';
import { cssGlobal } from './style';
import Lightbox from './Lightbox';

const sources = [
  'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/24/02a05602-a22b-4008-823b-0f785345c69e.jpg',
  'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/24/2c0f6f95-2ab9-497a-89ef-2ec55d3596d3.jpg',
  'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/24/524b73e9-4695-409b-bdc3-027f7fcc05ae.jpg',
  'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/24/81c0f69d-ae35-4afb-a131-998399e76e76.jpg',
  'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/24/827b36be-319f-4159-9c12-cc891ab03889.jpg',
];

const Preview = () => {
  const imageRef = useHoverZoom<HTMLButtonElement>();
  const [activeState, setActive] = useState(0);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.dataset.idx || '0';
    if ('startViewTransition' in document) {
      // @ts-expect-error
      document.startViewTransition(() => {
        flushSync(() => {
          setActive(Number(target));
        });
      });
    } else setActive(Number(target));
  };

  return (
    <>
      <Global styles={cssGlobal} />
      <Stickybar css={{ width: 348, paddingTop: '1.5rem', marginTop: '-1.5rem' }}>
        <Image
          ref={imageRef}
          as="button"
          transparent
          css={{ display: 'block', width: '100%', border: 'none', outline: 'none', padding: 0 }}
          ratio="1:1"
          src={sources[activeState]}
          alt=""
          objectFit="contain"
          edge="rounded"
          // @ts-expect-error
          popovertarget="preview-image"
        />
        <HorizontalSlider padding="0px 0px" gap=".5rem" css={{ marginTop: '.5rem' }}>
          {sources.map((source, idx) => (
            <Image
              key={idx}
              data-idx={idx}
              src={source}
              width={64}
              ratio="1:1"
              edge="rounded"
              data-active={activeState === idx ? '' : undefined}
              css={{
                border: `2px solid ${NN0}`,
                '&[data-active]': { borderColor: GN600 },
                transition: 'border-color .2s ease-out',
              }}
              onClick={handleClick}
            />
          ))}
        </HorizontalSlider>
        <Lightbox />
      </Stickybar>
    </>
  );
};

export default Preview;
