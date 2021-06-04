import React from 'react'

import { TextField, InputAdornment } from '@material-ui/core'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const Quote = (props) => {

    return (
                <TextField 
                    variant='outlined'
                    multiline
                    title={props.placeholder}
                    rowsMax={ 6 }
                    placeholder = {props.placeholder}
                    disabled = {props.edit}
                    //onChange={props.onMainChange}
                    style={ { width: '80%' } }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MessageOutlinedIcon style={{ color: '#d3d4d6'}}/>
                            </InputAdornment>
                        ),
                    }}
                    draggable
                    />
    )
}

export default Quote