import logo from './logo.svg';
import './App.css';
//componentes
import  {Greeting, UserCard}  from './components/Greeting';
import Product from './components/Product';
import { Button } from './components/Button';
import { TaskCard } from './components/Task';
import Posts from './components/Posts';
import Counter from './components/Counter';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>Hola mundo</h1>
        </p>
      
    
      <Greeting title=" Hola " name='jose'/>
      <Greeting title=" Hola react " name='jfrederic'/>
      <Greeting title=" Hola jsx " name='el nea'/>
      
      <Product/>
      <UserCard name='Ryan Ray' 
      amount={3000} 
      married={true} 
      point={[99,33,22]} 
      address={{street:'123 Main',city:'New York'}}/>
     
      </header>
      <main>
        <>
        <Button text='click me'/>
        <Button text='pay'/>
        <Button text='' name='joe'/>
        <TaskCard ready={true}
        name='ok' />
        <TaskCard/>
        <TaskCard/>
        </>
        <form>
          <h1>Registro de usuario</h1>
          <input onChange={function(e){
            console.log(e.target.value+'...')
          }}/>

        </form>
        <div>
          <Posts/>
          <>
          <Counter/>
          </>
          
        </div>
      </main>
    </div>
  );
}

export default App;
