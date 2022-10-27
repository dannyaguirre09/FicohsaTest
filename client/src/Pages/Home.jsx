import React from 'react'
import SearchComponent from '../components/Search/SearchComponent'
import { useNavigate  } from 'react-router-dom'


const Home = (props) => {

  const navigate = useNavigate();

  const onClickSearch = (TextToSearch) => {
    navigate(`/items?search=${TextToSearch}`)
  }

  return (
    <div className='vh-100 row m-0 text-center align-items-center justify-content-center'>
      <div className='col-auto'>
        <SearchComponent onClickSearch={onClickSearch} />
      </div>
    </div>
  )
}

export default Home
