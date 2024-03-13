
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogsData/Blogs'
import BookMark from './components/bookMark/BookMark'
import Header from './components/header/Header'

function App() {

  const [bookMark ,setBookMark]=useState([]);
  const [readTimes ,setIsTimes]=useState(0);

  const handleBookMark=(blog)=>{

    const newBookMark=[...bookMark,blog]
    setBookMark(newBookMark);

  }

  const readTime=(time)=>{

    setIsTimes(prev=>prev +time);


  }

  return (
    <div className='w-[90%] mx-auto'>
    <Header></Header>
    <div className='md:flex md:gap-5 my-10'>
    <Blogs onBookMark={handleBookMark} onReadTime={readTime}></Blogs>
    <BookMark bookMark={bookMark} readTimes={readTimes}></BookMark>
    </div>
    </div>
  )
}

export default App;