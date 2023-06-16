import { useRef } from "react";


export default function Modal({children, showModal, setShowModal}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false);
        }
    }
 
    if(showModal)
    {
        return(
            <div className="Modal" ref={modalRef} onClick={closeModal}>
            <div className="container">
               {children}   {/*children will contain the content to be displayed inside Modal*/}
               </div> 
           </div>
        )
  
    }
 
}
