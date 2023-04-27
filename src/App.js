import './App.css'
import routers from '@/router/IndexRouter'
import { useRoutes } from 'react-router-dom'

function App() {
    const element = useRoutes(routers)
    return <div className="App">{element}</div>
}

export default App
