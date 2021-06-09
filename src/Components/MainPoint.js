import React, { useState } from 'react'

import { Grid, TextField } from '@material-ui/core'

import SubPoint from './SubPoint'
import MainButtonBar from './MainButtonBar'
import CollapseDisplay from './CollapseDisplay'

const MainPoint = (props) => {
    const subPoints = []
    const [noEdit,] = useState( false )
    const [contentVisible, setContentVisible] = useState(false)

    const contentVisibleToggleHandler = () => {
        setContentVisible((isVisible) => !isVisible)
    }

    const addSubHandler = () => {
        console.log()
    }

    for (const key in props.content){
        subPoints.push({
            id: props.content[key].id,
            title: props.content[key].title,
            content: props.content[key].content
        })
    }

    let MainContent = <CollapseDisplay contNumber={subPoints.length} main={true}/>
//props.children.length
    const myMainPoint = subPoints.map((subPoint, subIndex) => (
        <Grid 
            item 
            xs={12}
            key = {props.mainId + subIndex}
            >
            <SubPoint
                    placeholder= {subPoint.title}//{`Sub-Point ${(subIndex+1)}`}
                    edit={noEdit}
                    label={`Subpoint ${subIndex + 1}`}
                    content={subPoint.content}
                    main={props.context}
                    subIndex={subIndex}
                    /> 
        </Grid>
    ))

    if (contentVisible) {
        MainContent = myMainPoint
    }

    return (
        <Grid 
            container
            spacing={2}
            style={{paddingBottom: '2rem'}}
            >
            
            <Grid 
                item 
                xs={12}
                >
                <TextField 
                    variant='filled'
                    style={ { width: '100%' } }
                    multiline
                    title={props.title}
                    rowsMax={ 6 }
                    label = {props.label}
                    value={ props.point }
                    placeholder = {'Main Point'}
                    disabled = {noEdit}
                    draggable
                    />
            </Grid>

            <Grid
                    item 
                    container 
                    spacing={4} 
                        >
                        {MainContent}
                    </Grid>

            <Grid item xs={12}>
                <MainButtonBar 
                    collapseToggle={contentVisible}
                    collapseMenu={contentVisibleToggleHandler}
                    addOption={(e) => addSubHandler ()}
                />
            </Grid>

        </Grid>
        
    )
}

export default MainPoint
