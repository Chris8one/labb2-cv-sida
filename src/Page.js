import Header from './Header';
import Footer from './Footer';
import { Outlet as Content } from 'react-router-dom';

function Page() {
  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
};

export default Page;