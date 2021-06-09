import React from 'react'

import { ButtonGroup, Button, Grid } from '@material-ui/core'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import AddIcon from '@material-ui/icons/Add';

const SubButtonBar = (props) => {

    const menuToggle = props.collapsToggle ? <ExpandMoreIcon /> : <ExpandLessIcon />

    return (
            <Grid
                item
                xs={12}
                >
                <ButtonGroup
                    size='small'
                    aria-label='control buttons' 
                >
                    <Button
                        disabled={props.disable}
                        onClick={props.collapseMenu}
                    >
                        {menuToggle}
                    </Button>

                    <Button
                        onClick={props.addOption}
                    >
                        <AddIcon />
                    </Button>
                </ButtonGroup>
            </Grid>
    )
}

export default SubButtonBar
