import React, {Component} from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';


function importAll(r) { 
   let images = {}; 
   r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); }); 
   return images; 
} 
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
// above functions to import list of local images to be loaded by Card.js
// https://disney.fandom.com/wiki/Category:Star_Wars_vehicles?from=S 




class App extends Component{
   constructor() {
      super()
      this.state = {
         data: [],
         category: '',
         selection: ''
      }
   }

   componentDidMount(){
      fetch('https://swapi.py4e.com/api/planets/')
      .then(response => response.json())
      .then(data => {
         this.setState({data: data.results});
         this.setState({category: 'planets'});
      })

   }


   btnClick = (buttonValue) => {
      let select = buttonValue.currentTarget.value;
      let url = `https://swapi.py4e.com/api/${select}/`;
      // console.log(select);
      images.category = select;
      fetch(url)
      .then(response => response.json())
      .then(data => {
         this.setState({data: data.results});
         this.setState({category: select});
      })
   }

  

   render(){
      const {data,selection,category} = this.state;
      // data.push(category);
      data.push(images); // append on images URL to data array
      console.log('category n App: ',category)
      // console.log(images);

      return !data.length ?
                <h1>Loading Library</h1> :

               (
                  <div className="tc">
                        <h1 className="f1 ma4 pa2" >The Unofficial Space Wars Look Up Data Base Web Site</h1>
                        <h2 className="f2"> Choose a category</h2>
                           <ul>
                              <li><button value={'vehicles'} onClick={this.btnClick}>Vehicles</button></li>
                              <li><button value={'planets'} onClick={this.btnClick}>Planets</button></li>
                              <li><button value={'starships'} onClick={this.btnClick}>Starships</button></li>
                           </ul>
                        <Scroll>
                           <h2 className="f2">{category}</h2>
                            <ErrorBoundry>
                                <CardList results={data} /> 
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                )
   }
}

export default App;
