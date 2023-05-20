import {Route, Routes, redirect} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import FileManager from './components/FileManager/FileManager';
function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element = {<FileManager />} />
      </Routes>
    </Layout>
  )
}

export default App
