import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import MainPoint from '../Components/MainPoint'

const Body = () => {

    const [state, setState] = useState([])

useEffect(() => {
    const fetchPaper = async () => {
        const response = await fetch('https://pprx-ea62f-default-rtdb.firebaseio.com/paper.json')
        const responseData = await response.json()

        const loadedPaper = []

        for (const key in responseData) {
            loadedPaper.push({
                id: key,
                title: responseData[key].title,
                subPoints: responseData[key].SubPoints
            })
        }
        setState(loadedPaper)
    }
    fetchPaper()
}, [])

    return (
        <Container>
                {state.map((mainPoint, mainDex) => (
                    <MainPoint 
                        context = {mainDex}
                        label={mainPoint.title} 
                        content={mainPoint.subPoints}
                        key={mainDex}
                        mainId={mainPoint.id}
                        >
                            {mainPoint.SubPoints}
                    </MainPoint>
                    
                ))
            }
        </Container>
    )
}

export default Body
