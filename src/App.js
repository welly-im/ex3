import logo from './logo.svg';
import './App.css';
import Search from './pages/search';
import { ClassSearch } from './pages/search/class';

// const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

function App() {

  //https://api.giphy.com/v1/stickers/search?api_key=${giphy}&q=${text}&limit=12&offset=0&rating=G&lang=en

  return (
    <div className="App">
  {/* <Search /> */}

    <ClassSearch />
    
    </div>
  );
}

export default App;
