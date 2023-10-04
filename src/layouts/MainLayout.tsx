import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Stickybar from '@/components/Stickybar';
import type { SkipperLayoutComponentType } from '@tokopedia/skipper/router';

const MainLayout: SkipperLayoutComponentType = ({ children }) => {
  return (
    <>
      <Stickybar stack>
        <Header />
      </Stickybar>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
