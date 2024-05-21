import { MantineProvider } from '@mantine/core';
import { mainTheme } from '@/theme/main.theme.ts';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@configs/react-router.config.ts';

function App() {
    return (
        <MantineProvider theme={mainTheme} defaultColorScheme={'light'} classNamesPrefix={'flow'}>
            <RouterProvider router={browserRouter} />
        </MantineProvider>
    );
}

export default App;
