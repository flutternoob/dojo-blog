//import logo from './logo.svg';
import Navbar from './navBar';
import Home from './Home';

function App() {
  //const title = "Welcome to the new blog";
  //const likes = 50;
  //const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{10}</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a> */}

        <Home />
      </div>
    </div>
  );
}

export default App;
