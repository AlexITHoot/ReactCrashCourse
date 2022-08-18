function Modal(props){

    function cancelHandler(){
        props.cancel();
    }

    function confirmHandler(){
        props.confirm();
    }

    return(
        <div className="modal-popup text-center">
            <p>Are you sure?</p>
            <div className="actions">
                <button className="btn btn-outline-dark m-2" onClick={cancelHandler}>Cancel</button>
                <button className="btn btn-danger m-2" onClick={confirmHandler}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal;