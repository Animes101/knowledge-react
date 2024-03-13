
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogsData/Blogs'
import BookMark from './components/bookMark/BookMark'
import Header from './components/header/Header'

function App() {

  const [bookMark ,setBookMark]=useState([]);

  const handleBookMark=(blog)=>{

    const newBookMark=[...bookMark,blog]
    setBookMark(newBookMark);

  }

  return (
    <div className='w-[90%] mx-auto'>
    <Header></Header>
    <div className='md:flex md:gap-5 my-10'>
    <Blogs onBookMark={handleBookMark}></Blogs>
    <BookMark bookMark={bookMark}></BookMark>
    </div>
    </div>
  )
}

export default App;