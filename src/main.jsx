import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faLock, faSignIn, faPaw, faAngleDoubleRight, faSignOut, faPencil, faTrash, faClock, faCircleCheck} from "@fortawesome/free-solid-svg-icons"
import { BrowserRouter } from "react-router-dom"

library.add(faEnvelope, faLock, faSignIn, faPaw, faAngleDoubleRight, faSignOut, faPencil, faTrash, faClock, faCircleCheck)

ReactDOM.render(
   <BrowserRouter>
    <App />
   </BrowserRouter>,
   document.getElementById('root')
 );
