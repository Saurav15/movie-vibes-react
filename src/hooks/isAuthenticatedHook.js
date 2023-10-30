import { useSelector } from "react-redux"

export const useIsAuthenticated = () => {
    const user = useSelector(state => state.user);

    if(user){
        return true;
    }
    return false;
}