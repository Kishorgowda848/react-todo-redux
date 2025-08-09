import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const handelNavigate = (path) => {
        navigate(path);
    }
    return <>
        <ul style={{
            gap: '29px',
            listStyle: 'none',
            display:'flex'
        }}>
            <li onClick={() => { handelNavigate('/') }}>Home</li>
            <li onClick={() => { handelNavigate('/about') }}>About</li>
            <li onClick={() => { handelNavigate('/contact') }}>Contact us</li>
        </ul>
    </>;
}

export default Header;