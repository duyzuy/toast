import React, { useEffect, useRef, useCallback, useState } from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCircleInfo, faCircleExclamation, faTriangleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons'



const ToastIcon = ({type}) => {

  switch(type) {
    case 'success': 
      return <FontAwesomeIcon icon={faCircleCheck} />
    case 'error':
      return <FontAwesomeIcon icon={faCircleExclamation} />
    case 'infor':
      return <FontAwesomeIcon icon={faCircleInfo} />
    case 'warning':
      return <FontAwesomeIcon icon={faTriangleExclamation} />
    
  }

}

const Toast = ({ toastList, setToastList }) => {


  const deleteToast = (id) => {
    const newtoastList = toastList.filter( toast => toast.id != id)
    setToastList(newtoastList)
  }

  useEffect( () => {

    if (toastList.length > 0){

      const timeID = setInterval( () => {
        deleteToast(toastList[0].id)
      }, 5000)

      return () => {
        clearInterval(timeID)

      }
    }
  },[toastList, deleteToast])
  

  useEffect( () => {

      let toastShowing = document.querySelectorAll('.toast--showing')

      if(toastShowing.length !== 0){

        const timerID = setInterval( () => {
       
          toastShowing[0].classList.remove('toast--showing');
          toastShowing = document.querySelectorAll('.toast--showing')

          if(toastShowing.length === 0){
            clearInterval(timerID)
          }

        }, 1000);
      }
  }, [toastList])



  return (
    <div className="toast">
      {toastList.length > 0 ? ( 
        <div className="toast__container">
          <div className="toast__items">
            {toastList.map( (item ) => (
                <div className={`toast__item ${item.id} toast--${item.type} toast--showing`} key={item.id}>
                  <div className="toast__inner">
                    <div className="toast__icon">
                    <ToastIcon 
                          type={item.type}
                        /> 
                    </div>
                    <div className="toast__body">
                      <div className="toast__title">
                        { item.title }</div>
                      <div className="toast__description">{ item.content }</div>
                    </div>
                    <div className="toast__close" onClick={() => deleteToast(item.id)}>
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        )
        : null
        }
    </div>
  )
}

export default Toast