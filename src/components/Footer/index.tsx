import { Container, ContentSwitcher, Image, Typography } from '@nest-ui/core';
import { useLocale } from '@tokopedia/skipper/app';
import type { SupportedLocalesType } from '@tokopedia/skipper/dist/model/locale';
import { memo } from 'react';
import { NN600 } from '@tokopedia/nest-color';
import { dataFooterApp, getStaticData } from './helpers/getStaticData';
import {
  cssFooter,
  cssFooterApps,
  cssFooterContent,
  cssFooterLang,
  cssFooterNav,
  cssFooterRight,
  cssFooterYear,
} from './styles';
import type { FooterData, FooterGroupLink, SecurityGroupLink, SocialGroupLink } from './type';

const renderFooterList = (group: FooterGroupLink | SecurityGroupLink | SocialGroupLink) => {
  if (group.type === 'security')
    return group.list.map((link, idx) => (
      <li key={idx}>
        <a href={link.link} target="_blank" rel="noreferrer">
          <Image src={link.image} ratio={link.imageRatio} width={link.imageWidth} transparent />
        </a>
      </li>
    ));
  if (group.type === 'social-media')
    return group.list.map((link, idx) => (
      <li key={idx}>
        <a href={link.link} target="_blank" rel="noreferrer">
          <Image src={link.icon} ratio="1:1" width={24} transparent />
        </a>
      </li>
    ));
  return group.list.map((link, idx) => (
    <Typography key={idx} as="li" variant="display2" color={NN600}>
      <a href={link.link}>{link.text}</a>
    </Typography>
  ));
};

const Footer = () => {
  const { lang = 'id', setLocale } = useLocale();
  const { illustration, apps } = dataFooterApp;

  const footerData: FooterData = getStaticData(lang, true);

  return (
    <footer css={cssFooter}>
      <Container css={cssFooterContent}>
        {footerData.map((group, idx) => (
          <nav key={idx} css={cssFooterNav}>
            <Typography variant="display1" as="div" css={{ fontWeight: 800 }}>
              {group.title}
            </Typography>
            <ul data-type={group.type}>{renderFooterList(group)}</ul>
          </nav>
        ))}
        <div css={cssFooterRight}>
          <Image src={illustration.src} ratio={illustration.ratio} width={illustration.width} transparent />
          <div css={cssFooterApps}>
            {apps.map((app, idx) => (
              <Image key={idx} src={app.src} alt={app.app} ratio="27:8" width={125} transparent />
            ))}
          </div>
          <Typography as="div" variant="display2" color={NN600} css={cssFooterYear}>
            © 2009 - {new Date().getFullYear()} PT Tokopedia
          </Typography>
          <ContentSwitcher
            name="footer-lang"
            value={lang}
            css={cssFooterLang}
            options={[
              { value: 'id', label: 'Indonesia' },
              { value: 'en', label: 'English' },
            ]}
            onChange={e => {
              setLocale(e.currentTarget.value as SupportedLocalesType);
            }}
          />
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
