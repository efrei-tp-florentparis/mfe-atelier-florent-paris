import { lazy } from 'react';

import './App.css';
const ProviderHeader = lazy(() => import('header_provider/header'));
const ProviderFooter = lazy(() => import('footer_provider/footer'));

const App = () => {
  return (
    <div className="content">
      <ProviderHeader />
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <ProviderFooter />
    </div>
  );
};

export default App;
