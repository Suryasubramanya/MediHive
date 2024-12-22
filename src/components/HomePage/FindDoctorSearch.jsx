import { useState } from 'react'
import './FindDoctorSearch.css'
import { useNavigate, Navigate } from 'react-router-dom'

const initLocations = [
    {
        place: "Boxhill",
        city: "Melbourne"
    },
    {
        place: "Eveleigh",
        city: "Sydney"
    },
    {
        place: "Burwood",
        city: "Melbourne"
    },
    {
        place: "Darlington",
        city: "Sydney"
    },
]

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist'
]

export const FindDoctorSearch = () => {

    const [locationResultHidden, setLocationResultHidden] = useState(true);
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchLocation, setSearchLocation] = useState('');
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const [locations, setLocations] = useState(initLocations);

    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        navigate(`/search/doctors?speciality=${speciality}&location=${searchLocation}`);
    }

    return <div className="nav-container-search">
        <div className="location-search-box">
            <img src={process.env.PUBLIC_URL + '/images/home_location_icon.svg'} alt="" width="22" />
            <input type="text" className="search-location-input-box" placeholder="Search location" onFocus={() => setLocationResultHidden(false)} onBlur={() => setLocationResultHidden(true)} value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
            <div className="search-location-input-results" hidden={locationResultHidden}>
                {
                    locations.map(location => <div className="search-location-result-item" key={location.place} onMouseDown={() => setSearchLocation(location.place)}>
                        <span><img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" width="12" /></span>
                        <span><div>{location.place}</div><div>{location.city}</div></span>
                    </div>)
                }
            </div>
        </div>
        <div className="doctor-search-box">
            <img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" width="22" />
            <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                {
                    specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                        <span><img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" width="12" /></span>
                        <span>{speciality}</span>
                        <span>SPECIALITY</span>
                    </div>)
                }
            </div>
        </div>
    </div>
}