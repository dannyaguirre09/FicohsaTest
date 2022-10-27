import NoFoundComponent from "../components/NoFound/NoFoundComponent"

const dataNoFound = {
    title:'Página no encontrada',
    description:'Intenta volver al inicio'
  };

const NoFound = () => {
  return (
    <div className='vh-100 row m-0 text-center align-items-center justify-content-center'>
        <NoFoundComponent data={dataNoFound} urlReturn={'/'} showLink={true}  />
    </div>
  )
}

export default NoFound