import React, { useState, useEffect } from 'react'
import Toast from './components/Toast'
import './app.scss'
const App = () => {

    const [toastList, setToastList] = useState([])
    
    
      const handleShowToast = (type, title, content) => {
          
          const newToast = {
            id: new Date().getTime(),
            type,
            title,
            content
          }
          setToastList(prevState => ([...prevState, newToast]))
      }
    
   

      
  return (
    <div className="container">
        <div className="buttons">
            <button onClick={() => handleShowToast("success", "Thanh cong", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout")}>Show success</button>
            <button onClick={() => handleShowToast("error", "Dang ky", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout")}>Show error</button>
            <button onClick={() => handleShowToast("infor", "Dang ky", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout")}>Show infor</button>
            <button onClick={() => handleShowToast("warning", "Dang ky", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout")}>Show warning</button>
        </div>
        <Toast toastList={toastList} setToastList={setToastList}/>
    </div>
  )
}

export default App