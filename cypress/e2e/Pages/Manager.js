import Home from "./Home"
import Admin from "./Admin"
import Login from "./Login"

class Manager {
    get home () { return new Home() }
    get admin () { return new Admin() }
    get login () {return new Login() }
}
export default Manager