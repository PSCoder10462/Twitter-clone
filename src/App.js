import React from 'react';
import './App.css';
import Sidebar from './sidebarComponents/Sidebar';
import Feed from './feedComponents/Feed';
import Widgets from './widgetsComponents/Widgets';

function App() {
  return (
    <div className="app">

    {/* Sidebar */}
      <Sidebar />

    {/* Feed */}
      <Feed />
    {/* Widgets */}
      <Widgets />

    </div>
  );
}

export default App;
