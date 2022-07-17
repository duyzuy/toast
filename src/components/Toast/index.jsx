import React, { useCallback, useEffect, useState } from 'react'
import './style.scss'
import ToastItem from './ToastItem'




const Toast = ({ toastList, setToastList }) => {


  const deleteToast = useCallback( (id) => {
   
   
    setToastList(prevState => {
      return [...prevState.filter(item => item.id !== id)]
    })

  }, [toastList, setToastList])
  

  // useEffect( () => {

  //     let toastShowing = document.querySelectorAll('.toast--showing')

  //     if(toastShowing.length !== 0){

  //       const timerID = setInterval( () => {
       
  //         toastShowing[0].classList.remove('toast--showing');
  //         toastShowing[0].classList.add('toast--remove');
  //         toastShowing = document.querySelectorAll('.toast--showing')

  //         if(toastShowing.length === 0){
  //           clearInterval(timerID)
  //         }
 
  //       }, 4700);
  //     }
  // }, [toastList])



  return (
    <div className="toast">
      {toastList.length > 0 ? ( 
        <div className="toast__container">
          <div className="toast__items">
            {toastList.map( (item ) => (
                <ToastItem 
                  key={item.id}
                  item={item}
                  deleteToast={deleteToast}
                />
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