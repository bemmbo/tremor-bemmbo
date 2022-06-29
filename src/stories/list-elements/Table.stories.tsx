import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableBody, TableHead, TableHeaderCell } from 'components';
import Table from 'components/list-elements/Table/Table';
import TableCell from 'components/list-elements/TableCell/TableCell';
import TableRow from 'components/list-elements/TableRow/TableRow';
import { Text } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ListElements/Table',
    component: Table,
} as ComponentMeta<typeof Table>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Table> = (args) => (
    <Table {...args}>
        <TableHead>
            <TableRow>
                <TableHeaderCell textAlignment="text-right">
                    Name
                </TableHeaderCell>
                <TableHeaderCell>
                    Sales
                </TableHeaderCell>
                <TableHeaderCell>
                    Region
                </TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell textAlignment="text-right">
                    Achilleas Georgios Mitrotasios
                </TableCell>
                <TableCell>
                    1.000.000
                </TableCell>
                <TableCell>
                    Region A
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    Jon Doe
                </TableCell>
                <TableCell>
                    2.202.000
                </TableCell>
                <TableCell>
                    Region B
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: undefined
};
