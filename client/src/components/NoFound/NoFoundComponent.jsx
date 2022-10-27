import React from 'react'
import { Link } from 'react-router-dom'

const NoFoundComponent = ({data, urlReturn, showLink=true}) => {
  return (
      <div class="text-center row">
          <div className=" col-md-6">
              <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                  className="img-fluid" />
          </div>
          <div className=" col-md-6 mt-5">
              <p className="fs-3"> <span className="text-danger">Opps!</span> {data.title}</p>
              <p className="lead">
                  {data.description}
              </p>
              {
                (showLink && <Link to={urlReturn}>Regresar</Link>)
              }
              
          </div>
      </div>
  )
}

export default NoFoundComponent
