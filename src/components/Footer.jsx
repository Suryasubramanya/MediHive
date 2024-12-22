import "./Footer.css";

export const Footer = () => {
    return <footer className="footer-container">
        <div className="footer-items">
            <div>
                <h3>MediHive</h3>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Carrers</li>
                    <li>Press</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3>For patients</h3>
                <ul>
                    <li>Search for doctors</li>
                    <li>Search for clinics</li>
                    <li>Search for hospitals</li>
                    <li>Book Diagnostic Tests</li>
                    <li>Book Full Body Checkups</li>
                    <li>MediHive Plus</li>
                    <li>Covid Hospital listing</li>
                    <li>Read health articles</li>
                    <li>Read about medicines</li>
                    <li>MediHive drive</li>
                    <li>Health app</li>
                </ul>
            </div>
            <div>
                <h3>For doctors</h3>
                <ul>
                    <li>MediHive Profile</li>
                </ul>
                <h3>For clinics</h3>
                <ul>
                    <li>Ray by MediHive</li>
                    <li>MediHive Reach</li>
                    <li>Ray Tab</li>
                    <li>MediHive Pro</li>
                </ul>
            </div>
            <div>
                <h3>For hospitals</h3>
                <ul>
                    <li>Insta by MediHive</li>
                    <li>Qikwell by MediHive</li>
                    <li>MediHive Profile</li>
                    <li>MediHive Reach</li>
                    <li>MediHive Drive</li>
                </ul>
            </div>
            <div>
                <h3>More</h3>
                <ul>
                    <li>Help</li>
                    <li>Developers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Healthcare Directory</li>
                    <li>Pracot Health Wiki</li>
                    <li>Corporate Wellness</li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
        <div className="footer-logo">
            <img src={process.env.PUBLIC_URL + '/images/download.png'} alt="MediHive-logo" />
            <h3>Copyright © 2017, MediHive. All rights reserved.</h3>
        </div>

    </footer>
}