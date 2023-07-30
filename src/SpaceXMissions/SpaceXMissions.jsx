import React, { useState } from 'react'

import SXMStyles from './SpaceXMissions.module.css'
import Mission from './Components/Mission.jsx'
import SortOld from '../../images/icons/SortOld.svg'
import SortNew from '../../images/icons/SortNew.svg'
import { api, useGetMissionsQuery } from '../Api/api.js'

const SpaceXMissions = () => {
    const [sortByYear, setSortByYear] = useState('desc')
    const startYear = 2015;
    const endYear = 2019;
    const { data: missions } = useGetMissionsQuery({ startYear, endYear, order: sortByYear })

    const toggleSortOrder = () => {
        const currentOrder = sortByYear
        const newOrder = setSortByYear(sortByYear === "desc" ? 'asc' : 'desc')
        api.util.updateQueryData(
            useGetMissionsQuery, { startYear, endYear, order: currentOrder },
            (data) => {
                if (data) {
                    return {
                        ...data,
                        order: newOrder
                    };
                }
            });
    };

    return (
        <div className={SXMStyles.mainContainer} >
            <h1>SpaceXMissions</h1>
            <button onClick={toggleSortOrder} className={SXMStyles.toggleButton}><img src={sortByYear === "asc" ? SortNew : SortOld} /> Сортировка по годам</button>
            <div className={SXMStyles.contentContainer}>
                <div className={SXMStyles.itemContainer}>
                    {missions?.map((mission, index) => (
                        <Mission mission={mission} key={mission.mission_name} data-testid={`mission-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpaceXMissions