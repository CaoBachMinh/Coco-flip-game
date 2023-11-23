import React from 'react'

//import Alert from 'react-popup-alert'
const Popup = () => {
  const [alert, setAlert] = React.useState({
    type: 'success',
    text: 'Hãy nghỉ ngơi và quay lại chơi vào ngày mai nhé',
    show: true
  })

  function onCloseAlert() {
    setAlert({
      type: 'success',
      text: 'Hãy nghỉ ngơi và quay lại chơi vào ngày mai nhé',
      show: true
    })
    window.open("https://coco-game-hackathon.vercel.app", '_blank');
  }
  return (
    <div>
      {/* <div>
        <Alert
          header={'Bạn đã hết thời gian chơi hôm nay'}
          btnText={'Quay lại trang chủ'}
          text={alert.text}
          type={alert.type}
          show={alert.show}
          onClosePress={onCloseAlert}
          pressCloseOnOutsideClick={false}
          showBorderBottom={true}
          alertStyles={{}}
          headerStyles={{}}
          textStyles={{

          }}
          buttonStyles={{
            
          }}
        />
      </div> */}

    </div>
  )
}

export default Popup