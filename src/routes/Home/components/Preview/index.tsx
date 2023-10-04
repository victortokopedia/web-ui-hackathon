/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unknown-property */
import Stickybar from '@/components/Stickybar';
import { Button, Grid, HorizontalSlider, Image, Typography } from '@nest-ui/core';
import { Carousel } from '@nest-ui/carousel';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Close } from '@nest-ui/icon';
import useHoverZoom from './useHoverZoom';
import { cssCarouselNav, cssModalWrapper } from './style';

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

  const handleHover = (e: MouseEvent<HTMLDivElement>) => {
    setActive(Number(e.currentTarget.dataset.idx || '0'));
  };

  const handleSlide = (e: MouseEvent<HTMLButtonElement>) => {
    setActive(Number(e.currentTarget.value || '0'));
  };

  return (
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
            onMouseEnter={handleHover}
          />
        ))}
      </HorizontalSlider>
      {/* @ts-expect-error */}
      <div id="preview-image" popover="" css={cssModalWrapper}>
        <Grid align="middle" css={{ marginBottom: '1rem' }}>
          <Grid.Col>
            <Typography as="div" variant="heading5">
              Gundam Fix Figuration Metal Composite/GFF Metal Composite Wing Zero EW
            </Typography>
          </Grid.Col>
          <Grid.Col span="auto">
            <Button
              size="small"
              variant="text"
              icon={<Close />}
              color="alternate"
              // @ts-expect-error
              popovertarget="preview-image"
              popovertargetaction="hide"
            />
          </Grid.Col>
        </Grid>
        <Grid gutterX="1.5rem">
          <Grid.Col span="auto">
            <div css={{ width: 740, position: 'relative' }}>
              <div css={{ overflow: 'hidden' }}>
                <Carousel value={activeState} onChange={setActive}>
                  {sources.map((source, idx) => (
                    <Image key={idx} transparent height={410} src={source} alt="" objectFit="contain" edge="rounded" />
                  ))}
                </Carousel>
              </div>
              <div css={cssCarouselNav}>
                <button
                  type="button"
                  disabled={!activeState}
                  value={Math.max(0, activeState - 1)}
                  onClick={handleSlide}
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  disabled={activeState === sources.length - 1}
                  value={Math.min(sources.length - 1, activeState + 1)}
                  onClick={handleSlide}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col>
            <Typography as="div" variant="display1" css={{ marginBottom: '1rem' }}>
              <b>Gambar Barang</b>
            </Typography>
            <Grid gutterX=".5rem" gutterY=".5rem">
              {sources.map((source, idx) => (
                <Grid.Col span="auto" key={idx}>
                  <Image data-idx={idx} src={source} width={64} ratio="1:1" edge="rounded" onClick={handleHover} />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </div>
    </Stickybar>
  );
};

export default Preview;
