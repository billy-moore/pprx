import React, { useState } from 'react'

import { Grid, InputAdornment, Paper, TextField } from '@material-ui/core'

import Quote from './Quote'
import SubButtonBar from './SubButtonBar'

import CollapseDisplay from './CollapseDisplay'

import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

const SubPoint = (props) => {
 
    const [contentVisible, setContentVisible] = useState(true)

    const contentVisibleToggleHandler = () => {
        setContentVisible(!contentVisible)
        
    }

    let SubContent = <CollapseDisplay contNumber={props.content.length} main={false} />
    
    const mySubPoint = props.content.map((quote, quoteIndex) => (

            <Grid 
                item 
                xs={12} 
                key = {quoteIndex}
                >
                    <Quote
                        label={quote}
                        placeholder={quote}
                        edit={props.edit}
                        />
            </Grid>
        ))

        if (contentVisible) {
            SubContent = mySubPoint
        }

    return (
            <Paper>
                <TextField 
                    variant='outlined'
                    multiline
                    title={props.title}
                    rowsMax={ 6 }
                    label = {props.label}
                    // value={  }
                    placeholder = { props.placeholder }
                    disabled = {props.edit}
                    //onChange={props.onMainChange}
                    style={ { width: '95%', marginBottom: '1rem' } }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FormatListBulletedOutlinedIcon style={{color: '#7d8287' }} />
                            </InputAdornment>
                        ),
                    }}
                    draggable
                    />
                    
                    <Grid 
                        container 
                        spacing={2}
                        >
                        {SubContent}
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        style={{padding: '1rem'}}
                        >
                        <SubButtonBar 
                            collapseMenu={contentVisibleToggleHandler}
                            collapsToggle={!contentVisible}
                            disable={Object.keys(props.content) === 0 ? true : false}
                        />
                </Grid>
            </Paper>
    )
}

export default SubPoint
