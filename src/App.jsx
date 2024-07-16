import "./styles/App.css";
import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Routes from "./routes/Routes";



function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes/>
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
