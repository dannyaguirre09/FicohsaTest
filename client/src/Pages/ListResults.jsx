import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItemListComponent from '../components/ItemList/ItemListComponent'
import NoFoundComponent from '../components/NoFound/NoFoundComponent'
import { API_HOST } from '../utils/Constans'

const dataNoFound = {
  title:'No hay resultado con la búsqueda ingresada',
  description:'Intenta buscar otro usuario'
};

const ListResults = ({textToSearch}) => {

  const [data, setData] = useState([])
  const [showData, setShowData] = useState(false)

  const getData = async () => {
    const url = `${API_HOST}/items?q=${textToSearch}`
    const data = await fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
      return data;
  }

  useEffect(() => {
    getData().then(data => {
      setData(data.data)
      setShowData(true)
    }).catch(err => console.log(err))
  }, [])
  

  return (
    <div className='vh-100 row m-0 text-center align-items-center justify-content-center'>
      <div className='col-auto'>
      <h2 className='pb-3 pt-3'>Resultados para: {textToSearch}</h2>
      {
        data?.length > 0 ? 
          data?.map((item, index) => (
              <div key={index} className='pb-2'>
              <Link to={`/items/${item.id}`} className='text-decoration-none'>
                <ItemListComponent data={item} />
              </Link>
            </div>
            )
          )
        :
        (showData &&  <NoFoundComponent data={dataNoFound} urlReturn={'/'} />)
        
      }
      
      {
        (data?.length > 0 && <Link to='/' className='text-decoration-none btn btn-dark'>Regresar</Link>)
      }
     
       </div>
    </div>
  )
}

export default ListResults
