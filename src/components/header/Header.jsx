import profilImage from '../../assets/images/profile.png'

const Header = () => {
  return <header className='flex justify-between py-5  border-b-2 border-gray-500 sticky top-0 bg-white z-10 my-3'>
    <a  className='text-4xl font-bold' href="">Knowledge Cafe</a>

    <img src={profilImage} className='ring-2 ring-green-400 rounded-full' alt="profile" />

  </header>
};
export default Header;