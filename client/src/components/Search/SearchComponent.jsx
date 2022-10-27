import {useState} from 'react'
import './SearchComponent.css'

const SearchComponent = ({onClickSearch}) => {

    const [search, setSearch] = useState('');
    const [showError, setShowError] = useState(false);

    const HandleSubmit = (e) => {
        e.preventDefault();
        if(search.trim() === '')
            setShowError(true)
        else {
            setShowError(false)
            onClickSearch(search);
        }
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input"  role='search'  type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />                       
                        <button type='submit' role='button' className='search_icon'><i className="fas fa-search"></i></button>
                    </div>
                    
                </div>
            </form>
            {(showError &&  <div className='row'>
                    <alert className='alert alert-danger'>El campo no puede estar vacío</alert>
            </div>)}
            

        </div>
    )
}

export default SearchComponent
