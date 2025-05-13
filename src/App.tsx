import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;