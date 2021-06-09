import React from 'react'

import { Grid, TextField, InputAdornment } from '@material-ui/core'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import DeleteIcon from '@material-ui/icons/Delete';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const Quote = (props) => {

    return (
        <Grid container direction='row' justify='center'draggable spacing={1}>
            <Grid item style={{display: 'grid', alignSelf: 'center'}}>
                <DragIndicatorIcon color='action' />
            </Grid>
            <Grid item xs={8} sm={10}>
                <TextField 
                            variant='outlined'
                            multiline
                            fullWidth
                            title={props.placeholder}
                            rowsMax={ 6 }
                            placeholder = {props.placeholder}
                            disabled = {props.edit}
                            
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MessageOutlinedIcon style={{ color: '#d3d4d6'}}/>
                                    </InputAdornment>
                                ),
                            }}
                        />
            </Grid>
            <Grid item>
                <DeleteIcon color='secondary' style={{display: 'grid', alignSelf: 'center' }} />
                <LockOpenIcon color='primary' style={{display: 'grid', alignSelf: 'center' }}/>
            </Grid>
        </Grid>
    )
}

export default Quote