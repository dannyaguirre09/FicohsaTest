import { useSearchParams, useParams } from 'react-router-dom';
import ListResults  from './ListResults'
import ItemDetail from './ItemDetail';

const Search = () => {

  const [searchParams] = useSearchParams();
  const textToSearch =  searchParams.get('search');
  let {id} = useParams();

  return (
    <div>
      {
        textToSearch? <ListResults textToSearch={textToSearch}/>: <ItemDetail id={id}/>
      }
    </div>
  )
}

export default Search
