import { useHistory } from "react-router"

function NavBar(props) {
    const history = useHistory()

    if (!props.user) {
        history.push('/')
    }
    
    return (
        <div>
            NavBar
        </div>
    )
}

export default NavBar