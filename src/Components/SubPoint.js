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

    const addContentHandler = (e, d) => {
        // fetch('https://pprx-ea62f-default-rtdb.firebaseio.com/paper.json', {
        //     method: 'POST',
        //     body: JSON.stringify(props.content[d]),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        console.log(e, d)
        console.log(props.content[e])
    }

    let SubContent = <CollapseDisplay contNumber={props.content.length} main={false} />
    
    const mySubPoint = props.content.map((quote, quoteIndex) => (
                    <Quote
                        key={quoteIndex}
                        label={quote}
                        placeholder={quote}
                        edit={props.edit}
                        />
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
                    placeholder = { props.placeholder }
                    disabled = {props.edit}
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
                    {SubContent}

                    <Grid
                        item
                        xs={12}
                        style={{padding: '1rem'}}
                        >
                        <SubButtonBar 
                            collapseMenu={contentVisibleToggleHandler}
                            collapsToggle={!contentVisible}
                            disable={Object.keys(props.content) === 0 ? true : false}
                            addOption={ (e) => addContentHandler(props.main, props.subIndex) }
                        />
                </Grid>
            </Paper>
    )
}

export default SubPoint
