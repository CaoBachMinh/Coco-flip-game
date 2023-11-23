// Import necessary dependencies
import React, { useState, useEffect,useRef } from 'react';
import Popup from 'reactjs-popup';
import './alert-popup.css';

// Create the Pop_up component
const Pop_up = () => {
  // State to control the open/close state of the popup
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef();

  // useEffect to control when the popup should appear (in this case, on component mount)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal, do not close it
        return;
      }

      // Clicked inside the modal or its children, let onClose handle closing
      setIsOpen(false);
    };

    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function Back_Home(){
    window.open("https://coco-game-tau.vercel.app/", '_blank');
  }

  // Render the component
  return (
    <Popup
      open={isOpen}
      onClose={() => setIsOpen(false)}
      modal
      nested
    >
      {close => (
        <div className="modal" ref={modalRef}>
          <div className="header"> 
            <h2> Bạn đã hết thời gian chơi hôm nay</h2>
          </div>
          <div className="content">
            {/* Your content goes here */}
            <p>
            Hãy nghỉ ngơi và quay lại chơi vào ngày mai nhé
            </p>
            
          </div>
          <div className="actions">
            {/* Your actions go here */}
            <button
              className="button"
              onClick={() => {
                console.log('modal closed');
                Back_Home();
              }}
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

// Export the component
export default Pop_up;
