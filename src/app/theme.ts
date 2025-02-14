import { createTheme } from '@mantine/core'

export const theme = createTheme({
    primaryColor: 'blue',
    defaultRadius: 'md',
    components: {
        Progress: {
            defaultProps: {
                size: 'lg',
                radius: 'xl'
            }
        }
    }
})
