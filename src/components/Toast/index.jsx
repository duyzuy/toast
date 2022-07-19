import React, { useCallback, memo } from 'react'
import './style.scss'
import ToastItem from './ToastItem'

const Toast = ({ toastList, setToastList }) => {

  const deleteToast = useCallback( (id) => {

    setToastList(prevState => {
      return [...prevState.filter(item => item.id !== id)]
    }) 

  }, [toastList])

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

export default memo(Toast)