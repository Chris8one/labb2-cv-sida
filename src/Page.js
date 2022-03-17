import Header from './Header';
import { Outlet as Content } from 'react-router-dom';

function Page() {
  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
    </>
  );
};

export default Page;