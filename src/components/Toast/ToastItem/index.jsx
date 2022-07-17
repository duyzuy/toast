import React, {memo, useMemo, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCircleInfo, faCircleExclamation, faTriangleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

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
      default: {
        return null
      }
    }
  
  }

const ToastItem = ({item, deleteToast}) => {

  const itemRef = useRef()
  const classNames = useMemo( () => {
      let classes = `toast__item toast--${item.type}`;
      classes = classes.concat(' toast--showing')
      
      return classes
  }, [])
  useEffect( () => {

        const timeID = setInterval( () => {
          deleteToast(item.id)
        }, 5000)
  
        return () => {
          clearInterval(timeID)
  
        }
  
    },[])
  useEffect( () => {

      const timerID = setInterval( () => {
      
        itemRef.current.classList.remove('toast--showing');
        itemRef.current.classList.add('toast--remove');
        clearInterval(timerID)

      }, 4700);
  }, [])

  return (
    <div className={classNames} ref={itemRef}>
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
  )
}

export default memo(ToastItem)