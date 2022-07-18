import React, {useMemo, useEffect, useRef, useCallback} from 'react'
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
        return <FontAwesomeIcon icon={faClose} />
      }
    }
  
}

const ToastItem = ({item, deleteToast}) => {

  const itemRef = useRef()
  const duration = 5000;
  const classNames = useMemo( () => {
      let classes = `toast__item toast--${item.type}`;
      classes = classes.concat(' toast--showing')
      
      return classes
  }, [])
  useEffect( () => {

        const timeID = setInterval( () => {
          deleteToast(item.id)
        }, duration)
  
        return () => {
          clearInterval(timeID)
        }
  
    },[])

  useEffect( () => {

      const timerID = setInterval( () => {
        itemRef.current.classList.remove('toast--showing');
        itemRef.current.classList.add('toast--remove');
        clearInterval(timerID)
      }, duration - 240);

      return () => {
        clearInterval(timerID);
      }
  }, [])

  const handleDeleteToast = useCallback( (id) => {
    itemRef.current.classList.remove('toast--showing');
    itemRef.current.classList.add('toast--remove');
    setTimeout( () => {
      deleteToast(id)
    }, 240)
  }, [])

  return (
    <div className={classNames} ref={itemRef}>
      <div className="toast__inner">
        <div className="toast__icon">
          <ToastIcon type={item.type} /> 
        </div>
        <div className="toast__body">
            <div className="toast__title">{ item.title }</div>
            <div className="toast__description">{ item.content }</div>
        </div>
        <div className="toast__close" onClick={() => handleDeleteToast(item.id)}>
          <ToastIcon  type="close" /> 
        </div>
        <div className="toast__progress" style={{animationDuration: `${duration - 240}ms`}}></div>
      </div>
    </div>
  )
}

export default ToastItem