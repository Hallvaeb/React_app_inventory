import React, { useState, useEffect } from 'react';
import '../App.css';

function Photographs() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [photos, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://api.pexels.com/v1/search?query=nature', {
      headers: {
        Authorization: "563492ad6f91700001000001b04c93d42f1b4f8aa2cf5a9af7fdb29f"
      }
    })
    const items = await response.json();
    console.log(items.photos);
    setItems(items.photos);
  }

  return (
    <div>
      <h1> Photographs </h1>
      {photos.map(photo => (
          <h1 key={photo.id}> {photo.photographer}</h1>))
      }
      {photos.map(photo => (
          <img key={photo.id} src={photo.url} alt="No photograph was found..." />))
      }
    </div>
  );
}

export default Photographs;



      // 'https//api.pexels.com/v1/curated'
    // const client = createClient('563492ad6f91700001000001b04c93d42f1b4f8aa2cf5a9af7fdb29f'); // All requests made with the client will be authenticated
// import { createClient } from 'pexels'; // For image API
// { <img src={item.url} alt="missing"> </img> }
