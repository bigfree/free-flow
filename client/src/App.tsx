import { MantineProvider } from '@mantine/core';
import { mainTheme } from '@/theme/main.theme.ts';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@configs/react-router.config.ts';
import { ModalsProvider } from '@mantine/modals';
import { FC, ReactElement } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const App: FC = (): ReactElement => (
    <DndProvider backend={HTML5Backend}>
        <MantineProvider theme={mainTheme} defaultColorScheme={'light'} classNamesPrefix={'flow'}>
            <ModalsProvider>
                <RouterProvider router={browserRouter} />
            </ModalsProvider>
        </MantineProvider>
    </DndProvider>
);

export default App;
