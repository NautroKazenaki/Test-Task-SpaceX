import React, { useState } from 'react'
import { DateTime } from 'luxon'
import MStyles from './Mission.module.css'
const Mission = (mission) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const formattedDate = DateTime.fromISO(mission.mission.launch_date_local, { zone: 'utc' }).toLocaleString(DateTime.DATETIME_MED)

    return (
        <div key={mission.mission.mission_name} className={MStyles.missionContainer}>
            {mission.mission.links && mission.mission.links.mission_patch && (
                <img src={mission.mission.links.mission_patch} alt={mission.mission.mission_name} />
            )}
            <h2>{mission.mission.mission_name}</h2>
            <h2>Дата запуска: {formattedDate}</h2>
            <button onClick={handleClick}>
                Подробнее о миссии
            </button>
            {isOpen && (
                <p>{mission.mission.details}</p>
            )}
        </div>
    )
}

export default Mission