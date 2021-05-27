import './App.css';
import React from 'react'
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import AddModal from './Components/AddModal'
import {useState} from 'react';

function Home() {
  const [film,setFilm]=useState([{  
    name:"Raya and the Dragon",
    image:"https://img.moviesjoy.to/resize/188x288/da/6a/da6aee2241ea4c209000eb873b1e101d/da6aee2241ea4c209000eb873b1e101d.jpg",
    description:"A family's road trip is upended when they find themselves in the middle of the robot apocalypse.",
    url:"https://www.youtube.com/embed/1VIZ89FEjYI",
    rating:'4'

  },
  {
    name:"Mortal Kombat",
    image:"https://img.moviesjoy.to/resize/188x288/d2/fc/d2fc1ca8f9fc8d04dfe3329a0f3257ef/d2fc1ca8f9fc8d04dfe3329a0f3257ef.jpg",
    description:"Sub-Zero prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    url:"https://www.youtube.com/embed/NYH2sLid0Zc",
    rating:'5'

  },
  {
    name:"The Aftermath",
    image:"https://img.moviesjoy.to/resize/188x288/c2/19/c2191873b8a2fc677c047584ae2df6f0/c2191873b8a2fc677c047584ae2df6f0.jpg",
    description:" A young man named Darwin lives, in a small cement module with little more than a computer.",
    url:"https://www.youtube.com/embed/FPv3e2FZOgo",
    rating:'4'

  },
  {
    name:"Good By Honey",
    image:"https://img.moviesjoy.to/resize/188x288/be/20/be208bd9ffd2ed045830848359db0319/be208bd9ffd2ed045830848359db0319.jpg",
    description:" A frantic crazy woman must coerce an exhausted truck driver to hide in the back of her truck. ",
    url:"https://www.youtube.com/embed/VBHOdtKgN-o",
    rating:'5'

  },
  {
    name:"Long Weekend",
    image:"https://img.moviesjoy.to/resize/188x288/75/71/757144948175017c183e24aff21809f8/757144948175017c183e24aff21809f8.jpg",
    description:"Bart's chance encounter with the enigmatic Vienna leads to a whirlwind weekend together. ",
    url:"https://www.youtube.com/embed/HphL31Hw2x8",
    rating:'2'

  },
  {
    name:"Burning Lies",
    image:"https://img.moviesjoy.to/resize/188x288/11/ea/11eac8ffb567896f7d7072e5a2fc0792/11eac8ffb567896f7d7072e5a2fc0792.jpg",
    description:" A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. ",
    url:"https://www.youtube.com/embed/P-uY6KGXvU4",
    rating:'4'

  },
  {
    name:"Love in Whitbrooke",
    image:"https://img.moviesjoy.to/resize/188x288/18/51/1851b6eca89f1f98500de4dfed8ab2a1/1851b6eca89f1f98500de4dfed8ab2a1.jpg",
    description:" A project manager is offered the career opportunity of a lifetime in London. ",
    url:"https://www.youtube.com/embed/I0BwUqNkJd8",
    rating:'3'

  },
  {
    name:"Seance",
    image:"https://img.moviesjoy.to/resize/188x288/80/0d/800ddf68d2f8fdf4cb640d0b40bfc612/800ddf68d2f8fdf4cb640d0b40bfc612.jpg",
    description:" Camille is the new girl at the prestigious Fairfield Academy for Girls. ",
    url:"https://www.youtube.com/embed/x88fDPEzGEM",
    rating:'5'

  },

])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rate, setrate] = useState('')


const searchtext=(text)=>{
settext(text)
}
const searchrate=(rate)=>{
  setrate(rate)
  }
  return (
    <div>
        <div className="App">
    <Header searchtext={searchtext} searchrate={searchrate}/>
    <MovieList film={film} text={text} rate={rate}/>
    <AddModal add={add}/>
 
    </div>
    </div>
  )
}

export default Home

