import React, { FC, useState } from 'react';
import styled from '@emotion/styled'

import {
    Card,
    CardMedia,
    CardContent,
    Checkbox,
    FormControlLabel
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { theme } from '../../styles/theme'


type StyleCardProps = {
    isChecked: boolean,
    children: React.ReactNode
}

const StyledBaseCard = styled(Card)`
    width:229px;
    height:150px;    
    border-radius: 6px;
    :hover {
        box-shadow: 0px 0px 0px 2px ${theme.palette.primary.light};
    }
`

const StyledCard = (props: StyleCardProps) => {
    const theme = useTheme()

    const styles = {
        base: {
            width: '229px',
            height:'150px',            
            border: `1px inset ${theme.palette.grey[200]}`
        },
        selectedCardStyles: {
            boxShadow: `0px 0px 0px 2px ${theme.palette.primary.dark}`
        },        
    }

    const { isChecked } = props;

    return (
        <StyledBaseCard
            sx={{
                ...styles.base,                
                ...(isChecked ? styles.selectedCardStyles : '')                
            }}>
            {props.children}
        </StyledBaseCard>
    )
}

const StyledCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top:.4rem;
`

export interface ICustomCard {
    title: string;
    image: string;
    alt: string;
}

const CustomCard: FC<ICustomCard> = () => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <StyledCard isChecked={isChecked}>
            <CardMedia
                component="img"
                height="100"
                image={require("../../assets/card-image.png")}
                alt="green iguana"
            />
            <StyledCardContent>
                <FormControlLabel
                    control={
                        <Checkbox
                            disableRipple
                            color="primary"
                            checked={isChecked}
                            onChange={() => setIsChecked(prevState => !prevState)} />}
                    label="Flood zone 3"
                    labelPlacement="end"
                />
            </StyledCardContent>
        </StyledCard>
    )
}
export default CustomCard;