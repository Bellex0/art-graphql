import React from 'react';
import {query} from '../App';
import {SaleIndicator} from './SaleIndicator';
import { useQuery} from '@apollo/client' 

function Banksy(){
    const {loading, data} = useQuery(query)
  if (loading) return <p>Loading....</p>

  const banksy = data.popular_artists.artists[1].name

  return (
  <section className="banksy-section">
  <div id="banksy">
  <h3>{banksy}</h3>
  {data.popular_artists.artists[1].artworks.map(work => (
    <>
    <h2>{work.title}</h2>
    <h3>{work.price}</h3>
    <h3>{work.is_for_sale && work.price === "" ? "Contact for Price" : null}</h3>
    <SaleIndicator sale={work.is_for_sale}/>
    <a href={`https://www.artsy.net/artwork/${work.id}`} target="_blank">View Details</a>
    </>
  ))}
  </div>

  </section>
  )
}

export default Banksy