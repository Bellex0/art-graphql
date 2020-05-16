import React from 'react';
import './App.css';
import {gql, useQuery} from '@apollo/client' ;
import {SaleIndicator} from './components/SaleIndicator';
import Banksy from './components/Banksy'

export const query = gql`
query {
  popular_artists(size: 3) {
    artists {
      name
      	artworks {
      	  id
          title
          is_for_sale
          price
          	image {
              image_url
              
          	}
      	}
    }
  }
}
`

function App() {
  const {loading, data} = useQuery(query)
  if (loading) return <p>Loading....</p>
console.log(data.popular_artists.artists[0].name)
console.log(data.popular_artists.artists[0].artworks.map(work => work.image).map(image => image.image_url))
// console.log(data.popular_artists.artists[0].artworks)

const pablo = data.popular_artists.artists[0].name
const banksy = data.popular_artists.artists[1].name
const andy = data.popular_artists.artists[2].name

// const contactPrice = (price, is_for_sale ) => {
//   if (price === "" && is_for_sale === "true") {
// return <h3>Contact for Price</h3>
//   }
// }
  return (
    <section className="App">
    <h1>Belle's Personal Gallery</h1>
    <div id="pablo">
    <h3>{pablo}</h3>
    {data.popular_artists.artists[0].artworks.map(work => (
      <>
      <h2>{work.title}</h2>
      <h3>{work.price}</h3>
      <h3>{work.is_for_sale && work.price === "" ? "Contact for Price" : null}</h3>
      <SaleIndicator sale={work.is_for_sale}/>
      <a href={`https://www.artsy.net/artwork/${work.id}`} target="_blank">View Details</a>
      </>
    ))}
    </div>

<Banksy />
    </section>
  );
}

export default App;
