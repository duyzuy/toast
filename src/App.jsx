import React, { useState } from 'react'
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
            <button onClick={() => handleShowToast("success", "Success", "It is a long established fact that a reader will be distracted by the  of a page when looking at its layout")}>Show success</button>
            <button onClick={() => handleShowToast("error", "Error", "It is a will be distracted by the readable content of a page when looking at its layout")}>Show error</button>
            <button onClick={() => handleShowToast("infor", "Infor", "It is a long established fact that a reader of a page when looking at its layout")}>Show infor</button>
            <button onClick={() => handleShowToast("warning", "Warning", " readable content of a page when looking at its layout")}>Show warning</button>
        </div>
        <Toast 
          toastList={toastList} 
          setToastList={setToastList}
        />
    </div>
  )
}

export default App