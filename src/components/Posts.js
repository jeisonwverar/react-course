import {VscBug} from 'react-icons/vsc'

const Posts=()=>{

    

 return <button onClick={ async()=>{
   let  app= await fetch('https://jsonplaceholder.typicode.com/posts')
     const res = await  app.json();
     console.log(res)
 }}>
    <VscBug/>
    Traer datos 
 </button>
}

export default Posts;