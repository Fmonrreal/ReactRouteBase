import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

const Page1 = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        const action = {
            type: types.logout,
            payload: {}
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/login';


        navigate( lastPath, {
            replace: true
        });
    }

    return ( 
        <div>
            <h1>Page 1</h1>
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                    Logout
            </button>
        </div>
     );
}
 
export default Page1;