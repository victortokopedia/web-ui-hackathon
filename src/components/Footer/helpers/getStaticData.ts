/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* DESC: miftah.zulfikar@tokopedia.com invalid props from unify component */
import type React from 'react';
import icon_facebook from '../assets/icon_facebook.svg';
import icon_twitter from '../assets/icon_twitter.svg';
import icon_pinterest from '../assets/icon_pinterest.svg';
import icon_instagram from '../assets/icon_instagram.svg';
import type { DataFooterApp, FooterData, FooterGroupLink } from '../type';

// TOKOPEDIA
const URL_ABOUT = '/about/';
const URL_CAREER = '/careers/';
const URL_BLOG = '/blog/';
const URL_TOKOPEDIA_SALAM = `/salam/`;
const URL_HOTEL = `/hotel/`;
const URL_PARENTSTORY = 'https://www.parentstory.com/';
const URL_BRIDESTORY = 'https://www.bridestory.com/';
const URL_KAMUS = 'https://kamus.tokopedia.com/';
const URL_OFFICIAL_STORE = '/official-store/';
const URL_APPS = '/mobile-apps/';
const URL_BILLS_AND_TOPUP = '/daftar-halaman/';
const URL_DEALS = '/deals/jakarta/?ispulsa=1';
const URL_FINANCE = '/keuangan/';
const URL_FREEONGKIR = `/discovery/bebas-ongkir`;

// BELI
const URL_TRAIN = 'https://tiket.tokopedia.com/kereta-api/';
const URL_EVENT = '/events/';
const URL_FLIGHT = '/flight/';
const URL_HOTLIST = '/hot/';
const URL_CATEGORY = '/p/';

// JUAL
const URL_SELLER_CENTER = `/edu/`;
const URL_MITRA_TOPPER = '/mitra-toppers/?nref=mtfoot';
const URL_REGISTER_OFFICIAL_STORE = `/edu/official-store/`;

// BANTUAN
const URL_HELP = '/help?nref=helpfooter';
const URL_TERMS = '/terms';
const URL_PRIVACY = '/privacy';

// SECURITY
const URL_SEAL = 'https://seal.controlcase.com/index.php?page=showCert&cId=3968489199';
const IMG_SEAL = 'https://images.tokopedia.net/img/unify/icon_pci_license.webp';
const URL_BSI_INFO = 'https://verifeyedirectory.bsigroup.com/Profile/PT_TOK-0047786234-000';
const IMG_BSI_INFO = 'https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png';
const URL_BSI_PRIVACY = 'https://verifeyedirectory.bsigroup.com/Profile/PT_TOK-0047786234-000';
const IMG_BSI_PRIVACY = 'https://images.tokopedia.net/img/unify/icon_bsi_license_hd_2.png';

// SOCIAL MEDIA
const URL_SOCIAL_FB = 'https://www.facebook.com/tokopedia';
const URL_SOCIAL_TW = 'https://www.twitter.com/tokopedia';
const URL_SOCIAL_PIN = 'https://www.pinterest.com/tokopedia';
const URL_SOCIAL_INSTA = 'https://www.instagram.com/tokopedia';

const getFallbackData = (lang: string): FooterGroupLink[] => {
  return [
    {
      title: 'Tokopedia',
      type: 'footer',
      list: [
        {
          text: lang === 'id' ? 'Tentang Kami' : 'About Us',
          link: URL_ABOUT,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            window.open(URL_ABOUT, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Karir' : 'Career',
          link: URL_CAREER,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            window.open(URL_CAREER, '_blank');
          },
        },
        {
          text: 'Blog',
          link: URL_BLOG,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_ABOUT, '_blank');
          },
        },
        {
          text: 'Tokopedia Salam',
          link: URL_TOKOPEDIA_SALAM,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_TOKOPEDIA_SALAM, '_blank');
          },
        },
        {
          text: 'Hotel',
          link: URL_HOTEL,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_HOTEL, '_blank');
          },
        },
        {
          text: 'Bridestory',
          link: URL_BRIDESTORY,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_BRIDESTORY, '_blank');
          },
        },
        {
          text: 'Parentstory',
          link: URL_PARENTSTORY,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_PARENTSTORY, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Kamus Tokopedia' : 'Tokopedia Dictionary',
          link: URL_KAMUS,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_KAMUS, '_blank');
          },
        },
        {
          text: 'Official Store',
          link: URL_OFFICIAL_STORE,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_OFFICIAL_STORE, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Aplikasi Tokopedia' : 'Tokopedia Apps',
          link: URL_APPS,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_APPS, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Tagihan & Top up' : 'Billing & Top up',
          link: URL_BILLS_AND_TOPUP,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_BILLS_AND_TOPUP, '_blank');
          },
        },
        {
          text: 'Deals Tokopedia',
          link: URL_DEALS,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_DEALS, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Keuangan' : 'Finance',
          link: URL_FINANCE,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_FINANCE, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Bebas Ongkir' : 'Free Shipping',
          link: URL_FREEONGKIR,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_FREEONGKIR, '_blank', 'noopener,noreferrer');
          },
        },
      ],
    },
    {
      title: lang === 'id' ? 'Beli' : 'Buy',
      type: 'footer',
      list: [
        {
          text: lang === 'id' ? 'Tiket Kereta' : 'Train Ticket',
          link: URL_TRAIN,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_TRAIN, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Tiket Pesawat' : 'Flight Ticket',
          link: URL_FLIGHT,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_FLIGHT);
          },
        },
        {
          text: lang === 'id' ? 'Tiket Acara' : 'Ticket Events',
          link: URL_EVENT,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_EVENT);
          },
        },
        {
          text: 'Hotlist',
          link: URL_HOTLIST,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_HOTLIST);
          },
        },
        {
          text: lang === 'id' ? 'Kategori' : 'Category',
          link: URL_CATEGORY,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_CATEGORY);
          },
        },
      ],
    },
    {
      title: lang === 'id' ? 'Jual' : 'Sell',
      type: 'footer',
      list: [
        {
          text: lang === 'id' ? 'Pusat Penjual' : 'Seller Center',
          link: URL_SELLER_CENTER,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_SELLER_CENTER, '_blank');
          },
        },
        {
          text: 'Mitra Toppers',
          link: URL_MITRA_TOPPER,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_MITRA_TOPPER, '_blank');
          },
        },
        {
          text: lang === 'id' ? 'Daftar Official Store' : 'Register Official Store',
          link: URL_REGISTER_OFFICIAL_STORE,
          target: '_blank',
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.open(URL_REGISTER_OFFICIAL_STORE, '_blank');
          },
        },
      ],
    },
    {
      title: lang === 'id' ? 'Bantuan' : 'Help',
      type: 'footer',
      list: [
        {
          text: lang === 'id' ? 'Bantuan Tokopedia' : 'Tokopedia Help',
          link: URL_HELP,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_HELP);
          },
        },
        {
          text: lang === 'id' ? 'Syarat dan Ketentuan' : 'Terms and Condition',
          link: URL_TERMS,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_TERMS);
          },
        },
        {
          text: lang === 'id' ? 'Kebijakan Privasi' : 'Privacy',
          link: URL_PRIVACY,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            window.location.assign(URL_PRIVACY);
          },
        },
      ],
    },
  ];
};

/**
 * Adds static footer content requirement such as "Keamanan"
 * and "Ikuti Kami" section group. It's also useful for backup data
 * if somehow API getting error or returns with empty data.
 *
 * @param {string} lang - Current language state.
 * @param {boolean} isError - Returns backup data if it is true.
 */
export const getStaticData = (lang: string, isError = false): FooterData => {
  return [
    ...(isError ? getFallbackData(lang) : []),
    {
      title: lang === 'id' ? 'Keamanan & Privasi' : 'Security & Privacy',
      type: 'security',
      list: [
        {
          link: URL_SEAL,
          image: IMG_SEAL,
          imageRatio: '105:71',
          imageWidth: '70.98px',
        },
        {
          link: URL_BSI_INFO,
          image: IMG_BSI_INFO,
          imageRatio: '1281:650',
          imageWidth: '94.65px',
        },
        {
          link: URL_BSI_PRIVACY,
          image: IMG_BSI_PRIVACY,
          imageRatio: '1281:650',
          imageWidth: '94.65px',
        },
      ],
    },
    {
      title: lang === 'id' ? 'Ikuti Kami' : 'Follow Us',
      type: 'social-media',
      list: [
        {
          icon: icon_facebook,
          link: URL_SOCIAL_FB,
          alt: 'icon-facebook',
        },
        {
          icon: icon_twitter,
          link: URL_SOCIAL_TW,
          alt: 'icon-twitter',
        },
        {
          icon: icon_pinterest,
          link: URL_SOCIAL_PIN,
          alt: 'icon-pinterest',
        },
        {
          icon: icon_instagram,
          link: URL_SOCIAL_INSTA,
          alt: 'icon-instagram',
        },
      ],
    },
  ];
};

export const dataFooterApp: DataFooterApp = {
  illustration: {
    src: 'https://images.tokopedia.net/img/unify/il_footer_hd_v2.png',
    ratio: '989:481',
    width: [350, undefined, undefined, 460],
  },
  apps: [
    {
      app: 'Play Store',
      src: 'https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg',
      url: 'https://play.google.com/store/apps/details?id=com.tokopedia.tkpd&hl=en',
    },
    {
      app: 'App Store',
      src: 'https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg',
      url: 'https://apps.apple.com/id/app/tokopedia/id1001394201',
    },
    {
      app: 'Huwaei App Gallery',
      src: 'https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg',
      url: 'https://appgallery.huawei.com/?spm=a2o4j.home.footer_top.18.12d753e0W5cFUF#/app/C100598349',
    },
  ],
};
