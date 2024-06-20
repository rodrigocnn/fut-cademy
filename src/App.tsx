import '@inovua/reactdatagrid-community/index.css';

import '@inovua/reactdatagrid-community/theme/default-dark.css';

import Router from './routes/index';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { CategoryProvider } from './modules/categories/context';

function App() {
  return (
    <>
      <div className="flex bg-secondary h-screen">
        <Sidebar />
        <div className="w-3/4">
          <Header />
          <div className="pl-6 pr-6">
            <CategoryProvider>
              <Router />
            </CategoryProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
