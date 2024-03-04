import React from "react";
import Grp46 from '../../assets/Group 46@2x.png';
import Search from '../../assets/magnifying-glass-light.svg';
import Moptro from '../../assets/moptro logo@2x.png';
import './emp.styles.css';
import HomeIcon from '../../assets/house-fill.svg';
import UserIcon from '../../assets/user-fill.svg';
import { Link } from "react-router-dom";

const EmpList = (employer) => {                                                     
    const employers = [
        {
            id: 1,
            name: 'Arjun',
            dob: '16-11-2000',
            role: 'Web Developer',
        },
        {
            id: 2,
            name: 'Mahesh',
            dob: '15-01-2000',
            role: 'Software Engineer',
        },

    ];

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
                    <div>
                        <div className="search-icon">
                            <input type="text" placeholder="Search with name" />
                        </div>
                    </div>
                </div>
                
                {/* <div className="emp-list">
                    <ul>
                        {employers.map((employer) => (
                            <li >
                                <p>EMP ID :{employer.id}</p><p>NAME :{employer.name}</p>  <p>DOB :{employer.dob}</p> <p> ROLE :{employer.role}</p>
                            </li>
                        ))}
                    </ul>
                </div> */}

            </div>

            <div className="emp-list">
                    <ul>
                        {employers.map((employer) => (
                            <li >
                                <p>EMP ID :{employer.id}</p><p>NAME :{employer.name}</p>  <p>DOB :{employer.dob}</p> <p> ROLE :{employer.role}</p>
                            </li>
                        ))}
                    </ul>
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
    )
}

export default EmpList;