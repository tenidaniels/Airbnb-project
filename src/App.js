import logo from './logo.svg';
import './App.css';
import  Navbar from './Navbar.js'
import Main from './Main.js';
import Card from './Card.js';
import data from "./data";
import No1 from './assets/No1.png'
import Star from './assets/Star.png'


function App() {

  const cards= data.map(item => {
    return(
      
      <Card
         key={item.id}
         {...item}
        //  img={item.coverImg}
        //  rating={item.stats.rating}
        //  reviewCount={item.stats.reviewCount}
        //  location={item.location}
        //  title={item.title}
        //  price={item.price}
        //  openSpots={item.openSpots}
      
      />

    )
  })
  return (
    <div>
   <Navbar/>
   <Main/>
   {/* <Card
   rating= "5.0"
   reviewCount={6}
   country= "USA"
   title= "Life Lessons with Katie Zaferes"
   price={136}
   /> */}
   <section className='cards-list'>
   {cards}
   </section>
    </div>
    )

}

export default App;
