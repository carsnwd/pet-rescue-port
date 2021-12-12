import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-col bg-slate-100 w-screen">Content</div>
    </div>
  )
}

export default App
