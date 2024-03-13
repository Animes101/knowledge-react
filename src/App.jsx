
import './App.css'
import Blogs from './components/blogsData/Blogs'
import BookMark from './components/bookMark/BookMark'
import Header from './components/header/Header'

function App() {


  return (
    <div className='w-[90%] mx-auto'>
    <Header></Header>
    <div className='md:flex md:gap-5 my-10'>
    <Blogs></Blogs>
    <BookMark></BookMark>
    </div>
    </div>
  )
}

export default App;