import {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemDetailComponent from '../components/ItemDetail/ItemDetailComponent'
import NoFoundComponent from '../components/NoFound/NoFoundComponent'
import { API_HOST } from '../utils/Constans'

const dataNoFound = {
  title:'No hay resultado con la búsqueda ingresada',
  description:'Intenta buscar otro usuario'
};

const ItemDetail = ({id}) => {

  const navigate = useNavigate();
  const [data, setData] = useState({})
  const [showNoFound, setShowNoFound] = useState(false);
  const [showData, setShowData] = useState(false);

  const getItemById = async () => {
    const url = `${API_HOST}/items/${id}`
    const data = await fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
      console.log(Object.entries(data.data).length)
      if(Object.entries(data.data).length > 0)
      setShowNoFound(true)
      else 
      setShowNoFound(false)
      return data;
  }

  useEffect(() => {
    getItemById().then(data => {
      setData(data.data)
      setShowData(true)
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className='vh-100 w-100 row m-0 text-center align-items-center justify-content-center'>
      <div className='col-md-5 col-md-offset-4'>
      {
        showNoFound ? <ItemDetailComponent data={data} />
          :
          (showData && <NoFoundComponent data={dataNoFound} urlReturn={'/'} showLink={false} />)
      }
      </div>
      <div>
        <button className='btn btn-dark' onClick={() => navigate(-1)}>Regresar</button>
      </div>
    </div>
  )
}

export default ItemDetail
