import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Projects from './Projects'
import Messages from './Messages'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='app-wrapper'>
        <Navbar />
        <Projects />
        <Messages />
      </div>
    </div>
  )
}

export default App
