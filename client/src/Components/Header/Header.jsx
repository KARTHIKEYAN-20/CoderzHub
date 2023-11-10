import React from 'react'
import { FaHome } from 'react-icons/fa'
import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2'
import { FaUsers, FaSquarePlus, FaCircleInfo } from 'react-icons/fa6'
import { IoSearchSharp } from 'react-icons/io5'
import { FaUserCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    //const dispatch = useDispatch();
    //const history = useNavigate();
    //const userName = useSelector(selectUserName);
    //const userPhoto = useSelector(selectUserPhoto);

    // useEffect(() => {
    //     auth.onAuthStateChanged(async (user) => {
    //         if (user) {
    //             setUser(user);
    //             history('/home');
    //         }
    //     });
    // }, [userName]);

    // const handleAuth = () => {
    //     if (!userName) {
    //         auth.signInWithPopup(provider)
    //             .then((result) => {
    //                 setUser(result.user);
    //             })
    //             .catch((error) => {
    //                 alert(error.message);
    //             });
    //     } else if (userName) {
    //         auth.signOut()
    //             .then(() => {
    //                 dispatch(setSignOutState());
    //                 history('/');
    //             })
    //             .catch((error) => alert(error.message));
    //     }
    // };

    // const setUser = (user) => {
    //     dispatch(
    //         setUserLoginDetails({
    //             name: user.displayName,
    //             email: user.email,
    //             photo: user.photoURL,
    //         })
    //     );
    // };
    return (
        <nav className='Header'>
            {/* <a className='logo'>
                <img className='logo_img' src={''} alt='CoderHub'></img>
            </a> */}
            <h1>CODERZHUB</h1>
            {
                !true ?
                    <a className='LoginBtn' onClick={''}>LOGIN</a>
                    :
                    <>
                        <div className='menu'>
                            <Link to='/' className='menus'>
                                <FaHome color='white' />
                                <span className='menuItem'>HOME</span>
                            </Link>
                            <Link to='/question' className='menus'>
                                <HiMiniChatBubbleLeftRight color='white' />
                                <span className='menuItem'>QUESTIONS</span>
                            </Link>
                            <Link to='/users' className='menus'>
                                <FaUsers color='white' />
                                <span className='menuItem'>USERS</span>
                            </Link>
                            <Link to='/askquestion' className='menus'>
                                <FaSquarePlus color='white' />
                                <span className='menuItem'>ASK QUESTION</span>
                            </Link>
                            <Link to='/about' className='menus'>
                                <FaCircleInfo color='white' />
                                <span className='menuItem'>ABOUT</span>
                            </Link>
                            <Link to='/about' className='menus'>
                                <FaUserCog color='white' />
                                <span className='menuItem'>PROFILE</span>
                            </Link>
                            <form action="" className='search'>
                                <input type="text" placeholder='Search' className='searchBox' />
                                <IoSearchSharp className='searchIcon' />
                            </form>
                        </div>
                        <div className='profile'>
                            <img className='profilePic' src={''}></img>
                            <div className='dropDown'>
                                <span onClick={''} >Sign out</span>
                            </div>
                        </div>
                    </>
            }
        </nav>
    )
}

export default Header
