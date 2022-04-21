import { useNavigate } from "react-router-dom";

function withNavigation(Component) {
    return props => <Component {...props} navigatee={useNavigate()} />;
}

export default withNavigation