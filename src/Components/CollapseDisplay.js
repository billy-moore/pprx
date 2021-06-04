import React from 'react'
import { Grid, Typography} from '@material-ui/core'

import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const CollapseDisplay = ( props ) => {
    return (
        <Grid
            container
            direction='row'
            spacing={1}
            style={{justifyContent: 'center', alignItems: 'center', margin: '10px'}}
        >
            <Grid
                item
                style={{padding: '10px'}}
                >
                <Typography variant='h6' color={ props.main ? 'primary': 'inherit'}>{props.contNumber}</Typography>
            </Grid>
            <Grid
                item>
                {props.main ? <FormatListBulletedOutlinedIcon color='primary'/> 
                : <MessageOutlinedIcon color='inherit'/> }
            </Grid>
            <Grid
                item>
                {props.main ? 
                    <Typography variant='h6' color='primary'>{props.contNumber > 1 ? 'Sub-Points' : 'Sub-Point'}</Typography>
                    : <Typography variant='h6' color='inherit'>{props.contNumber > 1 ? 'Items' : 'Item'}</Typography>
                }
                    </Grid>
            {/* <Grid item>
                <Divider variant='vertical' />
            </Grid>
            <Typography variant='p'>{props.quoteNumber} </Typography>
            <IconButton disabled>
                <MessageOutlinedIcon color='default'/>
            </IconButton> */}
        </Grid>
    )
}

export default CollapseDisplay
