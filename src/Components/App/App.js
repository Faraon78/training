import './App.css';

import PostsList from '../PostsList/PostsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1>MyChat</h1>        
      </header>
      <main className="Main">
        <nav className="Main-navigate">Buttons</nav>
        <PostsList/>        
      </main>
    </div>
  );
}

export default App;
