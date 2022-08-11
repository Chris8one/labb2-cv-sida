import Header from './Header';
import Footer from './Footer';
import { Outlet as Content } from 'react-router-dom';
import HiddenMessage from "./HiddenMessage";

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