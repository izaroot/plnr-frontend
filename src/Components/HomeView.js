import { useHistory } from "react-router"
import NavBar from "./NavBar"
import Profile from "./Profile"

function HomeView(props) {
    const history = useHistory()

    if (!props.user) {
        history.push('/')
    }

    return (
        <div>
            <NavBar />
            <Profile />
        </div>
    )
    
}

export default HomeView