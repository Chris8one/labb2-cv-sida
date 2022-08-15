
import Footer from './Footer';
import { Outlet as Content } from 'react-router-dom';
import HiddenMessage from "./HiddenMessage";
import Header from './Header';

function Page() {
  HiddenMessage();
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