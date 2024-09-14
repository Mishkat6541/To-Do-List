import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToDoList
 from './toDoList.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ToDoList>

    </ToDoList>

    <Footer></Footer>
  </StrictMode>,
)
