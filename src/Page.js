import { BrowserRouter as Router} from 'react-router-dom';
import { Outlet as Content } from 'react-router-dom';
import HiddenMessage from "./HiddenMessage";

function Page() {
  HiddenMessage();
  return (
    <Router>
      <main>
        <Content />
      </main>
    </Router>
  );
};

export default Page;