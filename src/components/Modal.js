import CardModal from "./CardModal"

const Modal = ({character, isOpen, isClose}) => {

    if(!isOpen) {
        return null
    }

    return (
        <div className="modal"> 
            <div className="modal_container"> 
                <CardModal character={character} onClick={isClose}/>
            </div>
        </div>
    )
}

export default Modal;