import React from 'react'
import './ItemDetailComponent.css'

const ItemDetailComponent = ({ data }) => {
  return (
          <div className="col-md-12">
            <div className="card card-usuario">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bgCard profile">
                  <div className="card-block text-center text-white">
                      <h6 className="f-w-800">{data.name}</h6>
                      <p>{data.username}</p>
                   
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{data.email}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">{data.phone}</h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Dirección</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Calle</p>
                        <h6 className="text-muted f-w-400">{data?.address?.street}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Ciudad</p>
                        <h6 className="text-muted f-w-400">{data?.address?.city}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


  )
}

export default ItemDetailComponent
