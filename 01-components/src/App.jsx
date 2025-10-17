import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className="parent">
        <Card img='https://images.unsplash.com/photo-1759399703184-11a722ec0706?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464' user='Sarthak' age={25} />
        <Card img='https://images.unsplash.com/photo-1759332978018-a6efdacf4d11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=390' user='Aman' age={30} />
        <Card img='https://images.unsplash.com/photo-1760509811587-c15b8dbd069f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=386' user='Aditya' age={18} />
      </div>
    </>
  )
}

export default App
