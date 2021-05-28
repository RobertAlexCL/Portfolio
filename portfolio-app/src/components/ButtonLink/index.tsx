import { Button, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {

}

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))

const ButtonLink: FC<Props> = ({ children, ...rest }) => {

    const { root } = useStyles()

    return <Link component={Button} {...rest} className={root}>{children}</Link>
}

export default ButtonLink