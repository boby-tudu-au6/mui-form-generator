import React from 'react';
import { Grid } from '@mui/material';
import FastTextField from './fields/FastTextField';
import PasswordField from './fields/FastPasswordField';
import FastSelect from './fields/FastSelectField';
import FastDatePicker from './fields/FastDatePicker'

function FormGenerator({ control, rootProps = {}, child = [] }) {
    const getComponent = (item) => {
        delete item.gridProps
        switch (item.type) {
            case 'select':
                return <FastSelect {...item} control={control} />
            case "auto-complete":
                return <AutoCompleteHook {...item} control={control} />
            case "password":
                return <PasswordField {...item} control={control} />
            case "date":
                return <FastDatePicker {...item} control={control}
                />
            default:
                return <FastTextField {...item} control={control} />
            // case "label":
            //     return <Typography {...item} >{item.value}</Typography>
        }
    }
    // sadfasdf
    return (
        <Grid container {...rootProps}>
            {child.map((item, i) => (
                <Grid key={i} item xs={item?.gridProps?.xs || 6} {...item.gridProps}>
                    {getComponent(item)}
                </Grid>
            ))}
        </Grid>
    )
}

const App = (props) => <FormGenerator {...props} />

export default App