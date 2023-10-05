import { useRef } from 'react';

import { Link } from '@tokopedia/skipper/router';

import { Button, Grid, Notification, Searchbar } from '@nest-ui/core';

import Appbar, { Main, Topbar } from '@/components/Appbar';
import type { AppbarMethods } from '@/components/Appbar/type';

import { Bell, Cart, ChevronDown, Location, Message, Phone } from '@nest-ui/icon';
import pxToRem from '@/helpers/cssUtils/pxToRem';
import {
  cssActionBtn,
  cssDownloadMobile,
  cssLocation,
  cssLogo,
  cssRecomSection,
  cssSearchSection,
  cssSeparator,
  cssTopbarUl,
} from './styles';

const Logo = () => (
  <Link to="/" css={cssLogo}>
    <img
      alt="tokopedia"
      src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
      width={150}
      height={40}
    />
  </Link>
);

const Header = () => {
  const appbar = useRef<AppbarMethods>(null);

  return (
    <Appbar methodsRef={appbar}>
      <Main>
        <Grid align="middle" gutterX={pxToRem(40)}>
          <Grid.Col span="auto">
            <Logo />
          </Grid.Col>
          <Grid.Col>
            <Grid align="middle" gutterX={pxToRem(8)}>
              <Grid.Col span="auto">
                <Button color="alternate" variant="text">
                  Kategori
                </Button>
              </Grid.Col>
              <Grid.Col css={cssSearchSection}>
                <Searchbar placeholder="Cari di Tokopedia" />
                <div css={cssRecomSection}>
                  <Grid gutterX="1rem" css={{ flexWrap: 'nowrap', overflow: 'auto' }}>
                    <Grid.Col span="auto">Motor Listrik</Grid.Col>
                    <Grid.Col span="auto">Sepatu Nike</Grid.Col>
                    <Grid.Col span="auto">Laptop Lenovo</Grid.Col>
                    <Grid.Col span="auto">Kipas Angin Cosmos</Grid.Col>
                    <Grid.Col span="auto">Insta 360</Grid.Col>
                    <Grid.Col span="auto">Speaker Aktif</Grid.Col>
                  </Grid>
                </div>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span="auto">
            <Grid align="middle" gutterX={pxToRem(48)}>
              <Grid.Col span="auto">
                <Button
                  icon={
                    <Notification inactive>
                      <Cart color="currentcolor" />
                    </Notification>
                  }
                  aria-label="cart"
                  color="alternate"
                  variant="text"
                  css={cssActionBtn}
                />
                <Button
                  icon={
                    <Notification variant="count" content={2}>
                      <Bell color="currentcolor" />
                    </Notification>
                  }
                  aria-label="Notification(2)"
                  color="alternate"
                  variant="text"
                  css={cssActionBtn}
                />
                <Button
                  icon={
                    <Notification>
                      <Message color="currentcolor" />
                    </Notification>
                  }
                  arial-label="Message(new)"
                  color="alternate"
                  variant="text"
                  css={cssActionBtn}
                />
              </Grid.Col>
              <div css={cssSeparator} />
              <Grid.Col span="auto">
                <Grid align="middle" gutterX={pxToRem(12)} css={{ width: 180 }}>
                  <Grid.Col>
                    <Button block variant="ghost" size="small">
                      Masuk
                    </Button>
                  </Grid.Col>
                  <Grid.Col>
                    <Button block size="small">
                      Daftar
                    </Button>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <Grid justify="end">
          <Grid.Col span="auto">
            <a href="" css={cssLocation}>
              <Location size="1rem" />
              Dikirim ke{' '}
              <strong>
                Jakarta Pusat
                <ChevronDown size="1rem" />
              </strong>
            </a>
          </Grid.Col>
        </Grid>
      </Main>
      <Topbar>
        <ul css={cssTopbarUl}>
          <li>
            <a href="#" css={cssDownloadMobile}>
              <Phone size={24} color="currentcolor" />
              &nbsp; Download Tokopedia App
            </a>
          </li>
          <li>
            <a href="#">About Tokopedia</a>
          </li>
          <li>
            <a href="#">Mitra Tokopedia</a>
          </li>
          <li>
            <a href="#">Mulai Berjualan</a>
          </li>
          <li>
            <a href="#">Promo</a>
          </li>
          <li>
            <a href="#">Tokopedia Care</a>
          </li>
        </ul>
      </Topbar>
    </Appbar>
  );
};

export default Header;
