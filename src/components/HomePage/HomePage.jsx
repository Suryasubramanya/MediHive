import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { AppoinmentSlider } from './AppoinmentSlider'
import { ArticleCard } from './ArticleCard'
import { ConsultCard } from './ConsultCard'
import { FacilityCard } from './FacilityCard'
import { FindDoctorSearch } from './FindDoctorSearch'
import './HomePage.css'
import { AppointmentCard} from './AppoinmentCard'
import { UserReviewCarousel } from './UserReviewCarousel'

export const HomePage = () => {

    const location_icon = process.env.PUBLIC_URL + './images/home_location_icon.svg';

    return <div className="homepage-container">
        <div className="home-search-area">
            <FindDoctorSearch />
        </div>
        {/* <section className="home-search-area">
            <div className="home-search-container">
                <Select placeholder="Search location" icon={<img src={location_icon} alt="" />} fontSize="14px" width="290px" height="40px" borderRadius="0" color="gray.400" cursor="pointer" className="home-search-location-select">
                    <option value="indore" className="home-select-option">Indore</option>
                    <option value="indore" className="home-select-option">Indore</option>
                    <option value="indore" className="home-select-option">Indore</option>
                    <option value="indore" className="home-select-option">Indore</option>

                </Select>
                <InputGroup>
                    <Input borderRadius="0" placeholder="Search doctors, clinics, hospitals, etc." style={{ color: "black", fontSize: "14px", cursor: "pointer" }} />
                    <InputRightElement
                        pointerEvents='none'
                        children={<SearchIcon color="gray.400" />}
                    />
                </InputGroup>

            </div>
            <div className="home-try-plus-img-container">
                <img src="https://www.MediHivestatic.com/subscriptions/images/plus-tag.png" alt="try plus" />
            </div>
        </section> */}
        <section className="home-banner">
            <div className="home-banner-left">

                <p>Skip the travel!!!  Book your doctor now.</p>
                <p>You are in safe hands</p>
                <Button className="btn-knowmore">Book Now</Button>
            </div>
            <div className="home-banner-right">
                <img src={process.env.PUBLIC_URL + '/images/home_banner.webp'} alt="banner" />
            </div>
        </section>
        <section className="home-facilities">
            <FacilityCard image={process.env.PUBLIC_URL + '/images/find_doctors.webp'} background="#98CBD6" title="Find Doctors Near You" sub="Confirmed appoinments" />
            <FacilityCard image={process.env.PUBLIC_URL + '/images/home_medicines.webp'} background="#ccd0db" title="Medicines" sub="Essentials at your doorstep" />
            <FacilityCard image={process.env.PUBLIC_URL + '/images/home_surgeries.webp'} background="#d5d8fc" title="Surgeries" sub="Safe and trusted surgery centers" />
        </section>
        <section className="home-consult">
            <h2>Consult top doctors online for any health concern</h2>
            <p>Private online consultations with verified doctors in all spedialties</p>
            <div className="home-consult-card-container">
                <ConsultCard title="Period doubts or Pregnancy" image={process.env.PUBLIC_URL + '/images/home_irregular_painful_period.webp'} />
                <ConsultCard title="Acne, pimple or skin issues" image={process.env.PUBLIC_URL + '/images/home_acne.webp'} />
                <ConsultCard title="Performance issues in bed" image={process.env.PUBLIC_URL + '/images/home_performance_issues.svg'} />
                <ConsultCard title="Cold, cough or fever" image={process.env.PUBLIC_URL + '/images/home_coughing.webp'} />
                <ConsultCard title="Child not feeling well" image={process.env.PUBLIC_URL + '/images/home_pediatric.svg'} />
                <ConsultCard title="Depression or anxiety" image={process.env.PUBLIC_URL + '/images/home-mental-wellness.webp'} />

            </div>
        </section>
        <section className="home-appoinments">
            <h2>Book an appointment for a doctor consultation</h2>
            <h3>Find experienced doctors across all specialties</h3>
            <div className="home-appoinments-card-container">
                <AppointmentCard image={process.env.PUBLIC_URL + '/images/dentist.png'} title="Dentist" sub="Teething troubles? Schedule a dental checkup" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" title="Gynecologist/Obstetrician" sub="Explore for women's health, pregnancy and infertility treatments" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" title="Dietitian/Nutrition" sub="Get guidance on eating right, weight management and sports nutrition" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" title="Physiotherapist" sub="Pulled a muscle? Get it treated by a trained physiotherapist" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg" title="General surgeon" sub="Need to get operated? Find the right surgeon" />
            </div>
        </section>
        <section className="home-top-articles">
            <div className="home-top-articles-info">
                <h2>Read top articles from health experts</h2>
                <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                <button className="button button-primary">See all articles</button>
            </div>
            <ArticleCard image="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" category="coronavirus" title="12 Coronavirus Myths and Facts That You Should Be Aware Of" sub="Dr. Diana Borgio" />
            <ArticleCard image="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" category="Vitamins and supplements" title="Eating Right to Build Immunity Against Cold and Viral Infections" sub="Dr. Diana Borgio" />
        </section>


    </div>
}