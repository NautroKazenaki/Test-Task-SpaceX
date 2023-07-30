import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SXMStyles from './SpaceXMissions.module.css'
import Mission from './Components/Mission.jsx'
import SortOld from '../../images/icons/SortOld.svg'
import SortNew from '../../images/icons/SortNew.svg'

const SpaceXMissions = () => {
    const [missions, setMissions] = useState([])
    const [sortByYear, setSortByYear] = useState('desc')
    const [sortByOld, setSortByOld] = useState(false)

    useEffect(() => {
        const Data = async () => {
            try {
                const responce = await axios.get('https://api.spacexdata.com/v3/launches', {
                    params: {
                        start: '2015-01-01',
                        end: '2019-12-31',
                        order: sortByYear === 'asc' ? 'asc' : 'desc',
                        launch_success: true
                    },
                });
                setMissions(responce.data);
            } catch (error) {
                console.log(error)
            }
        };

        Data();
    }, [sortByYear]);

    const toggleSortByYear = () => {
        debugger
        setSortByYear(sortByYear === "asc" ? 'desc' : 'asc')
        setSortByOld(!sortByOld)
    };
    


    return (
        <div className={SXMStyles.mainContainer} >
            <h1>SpaceXMissions</h1>
            <button onClick={toggleSortByYear} className={SXMStyles.toggleButton}><img src={sortByOld ? SortNew : SortOld }/> Сортировка по годам</button>
            <div className={SXMStyles.contentContainer}>
                <div className={SXMStyles.itemContainer}>
                    {missions.map(mission => (
                        <Mission mission={mission} key={mission.mission_name}/>
                    ))}
                </div>

            </div>



        </div>
    )
}

export default SpaceXMissions