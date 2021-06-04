import React from 'react'

import { Grid, Typography } from '@material-ui/core'

const BlankCard = () => {
    
    return (
        <Grid 
            container
            spacing={2}
            style={{padding: '2rem'}}
            >
            
            <Grid 
                item 
                xs={12}
                >
                    <Typography variant='h5'>
                        There's nothing here!<br />
                        Add some content!
                    </Typography>
            </Grid>
        </Grid>
    )
}

export default BlankCard
