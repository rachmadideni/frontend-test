import React, { FC, useState } from 'react';

import {
    Card,
    CardMedia,
    CardContent,
    Checkbox,
    FormControlLabel
} from '@mui/material'

import { useTheme } from '@mui/material/styles'

type StyleCardProps = {
    isChecked: boolean,
    children: React.ReactNode
}

const StyledCard = (props: StyleCardProps) => {
    const theme = useTheme()
    const { isChecked, children } = props;

    const styles = {
        selectedCardStyles: {
            boxShadow: `0px 0px 0px 1px ${theme.palette.primary.main}`
        },
    }

    return (
        <Card            
            sx={{
                width: 229,
                height: 150,
                ...(isChecked ? styles.selectedCardStyles : '')
            }}>
            {children}
        </Card>
    )
}

const CustomCard: FC = () => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <StyledCard isChecked={isChecked}>
            <CardMedia
                component="img"
                height="100"
                image={require("../../assets/card-image.png")}
                alt="green iguana"
            />
            <CardContent>
                <FormControlLabel
                    control={
                        <Checkbox 
                            checked={isChecked}
                            onChange={() => setIsChecked(prevState => !prevState)} />}
                    label="Flood zone 3"
                    labelPlacement="end"
                />
            </CardContent>
        </StyledCard>
    )
}
export default CustomCard;