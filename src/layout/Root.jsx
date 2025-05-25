import Navbar from '../components/sharedComponents/Navbar';
import Footer from '../components/sharedComponents/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
           <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;