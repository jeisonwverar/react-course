export function TaskCard({ready, name}){
    return <div className='container'>
        <div className='card'style={ready ?{background:'green'}:{background:'red'}}>
            <h1>Mi primer tarea</h1>
            <span>
               </span>
               {ready  ? 'Tarea Realizada':'Tarea pendiente'}
               <button >{name}</button>
         </div>
    </div>
}