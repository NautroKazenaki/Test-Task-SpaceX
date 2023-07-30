import React from 'react'
import { render, screen, } from '@testing-library/react'
import { useGetMissionsQuery } from '../Api/api'
import SpaceXMissions from './SpaceXMissions'


jest.mock('../Api/api')

describe('SpaceXMissions', () => {
    test('проверка, что всё рендерится корректно', () => {
        useGetMissionsQuery.mockReturnValue({
            data: [
                { id: 1, name: 'Mission 1', rocket: 'Rocket 1', year: 2017 },
                { id: 2, name: 'Mission 2', rocket: 'Rocket 2', year: 2016 },
                { id: 3, name: 'Mission 3', rocket: 'Rocket 3', year: 2019 },
            ],
        })
        render(<SpaceXMissions />)

        expect(screen.getAllByTestId('mission')).toBeInTheDocument

    })

})

test('проверка наличия элементов Mission', () => {
    render(<SpaceXMissions />)

    const mission = screen.getAllByTestId("mission")

    mission.forEach(Component => {
        expect(Component).toBeInTheDocument
    })
})

test('проверка, что отрисовывается больше 1 компонента', () => {
    render(<SpaceXMissions />)
    const mission = screen.getAllByTestId("mission")
    expect(mission.length).toBeGreaterThan(0)
})

