import ExchangeRate from '../components/ExchangeRate';
import Todo from '../components/Todo';
import Modal from '../components/Modal';
import Backdrop from '../components/Backdrop';
import { useState } from 'react'; 

function TodosPage(props){

    const [modalIsOpen,setModalIsOpen] = useState(false);
    
    function deleteHandler(){
        setModalIsOpen(true);
    }
  
    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return(
        <div className="App container">
        <h1>My todos</h1>
        <ExchangeRate data={props.data}/>
        <Todo text="React JS" click={deleteHandler}/>
        <Todo text="React Native" click={deleteHandler}/> 
        {modalIsOpen && <Modal cancel={closeModalHandler} confirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop click={closeModalHandler}/>}            
      </div>
    )
}

export default TodosPage;