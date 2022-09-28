import React, { FC, useState } from 'react';
import { styled } from '@mui/material/styles';

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

const StyledBaseCard = styled(Card)(({ theme }) => ({
    width: 229,
    height: 150,
    borderRadius: theme.spacing(1),
    border: `1px inset ${theme.palette.grey}`,
    '&:hover': {
        boxShadow: `0px 0px 0px 2px ${theme.palette.success.light}`
    }

}))

const StyledCard = (props: StyleCardProps) => {
    const theme = useTheme()
    const { isChecked, children } = props;

    const styles = {
        selectedCardStyles: {
            boxShadow: `0px 0px 0px 2px ${theme.palette.success.dark}`
        },
    }

    return (
        <StyledBaseCard
            sx={{
                ...(isChecked ? styles.selectedCardStyles : '')
            }}>
            {children}
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
                            color="success"
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