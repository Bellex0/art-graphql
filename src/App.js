import React from 'react';
import './App.css';
import {gql, useQuery} from '@apollo/client' 

const query = gql`
query {
  popular_artists(size: 3) {
    artists {
      name
      	artworks {
      	  id
          title
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


  return (
    <section className="App">
    <h1>Arts for Sale</h1>
    <div id="pablo">
    <h3>{pablo}</h3>
    {data.popular_artists.artists[0].artworks.map(work => (
      <>
      <h2>{work.title}</h2>
      <h3>{work.price}</h3>
      <a href={`https://www.artsy.net/artwork/${work.id}`} target="_blank">View Details</a>
      
      </>
    ))}
    </div>

    </section>
  );
}

export default App;
