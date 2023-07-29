import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SXMStyles from './SpaceXMissions.module.css'

const SpaceXMissions = () => {
    const [missions, setMissions] = useState([])
    const [sortByYear, setSortByYear] = useState('desc')
    const [showMissionDetails, setShowMissionDetails] = useState(false)

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
        setSortByYear(sortByYear === "asc" ? 'desc' : 'asc')
    };

    const toggleShowMissionDetails = () => {
        setShowMissionDetails(!showMissionDetails)
    };

    return (
        <div className={SXMStyles.mainContainer} >
            <h1>SpaceXMissions</h1>
            <button onClick={toggleSortByYear}> Сортировка по годам</button>
            <div className={SXMStyles.contentContainer}>
                <div className={SXMStyles.itemContainer}>
                    {missions.map(mission => (
                        <div key={mission.mission_name}>
                            {mission.links && mission.links.mission_patch && (
                                <img src={mission.links.mission_patch} alt={mission.mission_name} />
                            )}
                            <h2>{mission.mission_name}</h2>
                            <h2>Дата запуска: {mission.launch_data_local}</h2>
                            <button onClick={toggleShowMissionDetails}>
                                Подробнее о миссии
                            </button>
                            {showMissionDetails && (
                                <p>{mission.details}</p>
                            )}


                        </div>
                    ))}
                </div>

            </div>



        </div>
    )
}

export default SpaceXMissions