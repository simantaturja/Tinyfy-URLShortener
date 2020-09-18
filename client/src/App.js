import React, { useState } from 'react';
import './App.css';
import SearchBar from "material-ui-search-bar";
import axios from 'axios';
import ParticlesBg from 'particles-bg';
import logo from './tinify.png';
function App() {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = query => setSearchValue(query);

  const [value, setValue] = useState('');
  

  return (
    <div className="App">
      <div className = "particles">
        <ParticlesBg type = "circle" bg = {true}  num = {10} />
      </div>
      <div className="container">
        <header className="App-header">
          <img src = {logo} />
        </header>
        <div className="Subtitle-area">
          <h4>Shorten your URL!</h4>
        </div>
        <div className="Search-area">

          <SearchBar className='Search-bar' placeholder='Paste your url here' onChange={onChangeSearch} value={searchValue}
            onRequestSearch={() => {
              try {
                console.log(searchValue);
                const response = axios.post('https://tiinify.herokuapp.com/url', { url: searchValue });
                console.log('👉 Returned data:', response.then((res) => {
                  if (res.status == 200) {
                    console.log(res.data.slug);
                    setValue('https://tiinify.herokuapp.com/'+res.data.slug);
                  } else {
                    console.log('error');
                  }
                }));
               
              } catch (e) {
                console.log(`😱 Axios request failed: ${searchValue}`);
              }
            }}
          />
          <card>
          <h3><a href={value} target="_blank">{value}</a></h3>
          </card>

          
        </div>
        

      </div>
      <footer>
        <p>Made with ❤️  by Turja</p>
      </footer>
    </div>

  );
}





export default App;
