import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet as Content } from 'react-router-dom';
import HiddenMessage from "./components/HiddenMessage";

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