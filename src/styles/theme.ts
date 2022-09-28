import { createTheme } from '@mui/material/styles'

const color = {
    black: '#000000',
    white: '#FFFFFF',
    primary: '#21B6A8',
    primaryDark: '#3D8479',
    primaryLight: '#65E9D9',
    grey: {
        '200': '#EFEFEF',
        '400': '#CCCCCC'
    }
}

const typography = {
    body2: {
        fontSize: 14,
        color: color.black
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: color.primary,
            dark: color.primaryDark,
            contrastText: color.white
        },
        secondary: {
            main: color.primary,
        },
        common: {
            black: color.black,
            white: color.white
        },
        grey: {
            [200]: color.grey[200],
            [400]: color.grey[400]
        }
    },
    typography: {
        body2: {
            ...typography.body2
        }
    }
}) 
