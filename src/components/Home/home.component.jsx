import React from "react";
import Grp46 from '../../assets/Group 46@2x.png';
import HomeIcon from '../../assets/house-fill.svg';
import Moptro from '../../assets/moptro logo@2x.png';
import UserIcon from '../../assets/user-fill.svg';
import { Link } from "react-router-dom";
import './home.styles.css';


const Home = () => {
    // const [value, setValue] = React.useState(0);

    return (
        <div className="container">
            <div>
                <div className="grp46">
                    <img src={Grp46} width={40} height={40} />
                </div>
                <div className="moptro">
                    <img src={Moptro} width={99} height={82} />
                </div>
                <div className="info">
                    <input type="text" placeholder="Employee Productivity Dashboard" />
                </div>

                <div className="day-data">
                    <div className="day-name">
                        <h1>Productivity on Monday</h1>
                    </div>
                    <div className="progress-data">
                        <div className="progress-line" style={{ width: '4%' }}></div>
                        <div className="perc">4%</div>
                    </div>

                    <div className="day-name">
                        <h1>Productivity on  Tueday</h1>
                    </div>
                    <div className="progress-data">
                        <div className="progress-line" style={{ width: '65%' }}></div>
                        <div className="perc">92%</div>
                    </div>

                    <div className="day-name">
                        <h1>Productivity on Wednesday</h1>
                    </div>
                    <div className="progress-data">
                        <div className="progress-line" style={{ width: '85%' }}></div>
                        <div className="perc">122%</div>
                    </div>

                    <div className="day-name">
                        <h1>Productivity on Thursday</h1>
                    </div>
                    <div className="progress-data">
                        <div className="progress-line" style={{ width: '70%' }}></div>
                        <div className="perc">93%</div>
                    </div>

                    <div className="day-name">
                        <h1>Productivity on Friday</h1>
                    </div>
                    <div className="progress-data">
                        <div className="progress-line" style={{ width: '75%' }}></div>
                        <div className="perc">89%</div>
                    </div>

                    <div className="day-name">
                        <h1>Productivity on Saturday</h1>
                    </div>
                    <div className="progress-data">
                        <div className="progress-line" style={{ width: '85%' }}></div>
                        <div className="perc">98%</div>
                    </div>


                </div>
                <div className="bottom-nav">
                    <div className="home-icon">
                    <Link to='/home' className='home' ><img src={HomeIcon} height={28} width={28} /></Link>
                    
                    </div>
                    <div className="user">
                    <Link to='/emp' className='user-info' ><img src={UserIcon} height={28} width={28} /></Link>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;