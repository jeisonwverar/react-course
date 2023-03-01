

 export function Greeting({title,name}){
    
    return <h1>Es un componente con un props{title}mi nombre es {name}</h1>
}

export function UserCard(props){
    console.log(props)
    return <div>

        <h1>{props.name}</h1>
        <p>{props.amount}</p>
        <p>{props.married ?'married':'sigle'}</p>
        <p>{props.point[1]}</p>
        <ul>
            <li>City: {props.address.city}</li>
            <li>City: {props.address.street}</li>
        </ul>
         </div>
}