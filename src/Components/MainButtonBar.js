import React from 'react'

import { ButtonGroup, Button, Grid } from '@material-ui/core'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const MainButtonBar = (props) => {

    const menuToggle = props.collapseToggle ? <ExpandLessIcon /> : <ExpandMoreIcon />

    return (
            <Grid
                item
                xs={12}
                container
                direction='row'
                justify='center'
                alignItems='center'
                >
                <ButtonGroup
                    size='small'
                    aria-label='control buttons' 
                    color='primary'
                >
                    <Button
                        onClick={props.collapseMenu}
                    >
                        {menuToggle}
                    </Button>

                    <Button
                        onClick={props.addOption}
                    >
                        <AddIcon />
                    </Button>

                    <Button>
                        <EditIcon />
                    </Button>
                </ButtonGroup>
            </Grid>
    )
}

export default MainButtonBar
