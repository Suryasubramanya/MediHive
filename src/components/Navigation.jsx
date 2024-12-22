import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "./Navigation.css";
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return <div className="navbar-area">
        <nav className="nav-container">
            <div className="div-nav-left">
                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/download.png'} alt="MediHive-logo" className='nav-logo' /></Link>
            </div>
            <div className="div-nav-middle">
                <div className="div-nav-middle-item">
                    <div>Find Doctors</div>
                    <div>Book an appointment</div>
                </div>

                <div className="div-nav-middle-item">
                    <div>Video Consult</div>
                    <div>Consult top doctors</div>
                </div>
                <Link to="/medicines">
                    <div className="div-nav-middle-item">
                        <div>Medicines</div>
                        <div>MediHive Pharmacy</div>
                    </div>
                </Link>
            </div>
            <div className="div-nav-right">
            </div>
        </nav>
    </div>
}