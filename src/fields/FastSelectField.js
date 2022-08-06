
import React from 'react';
import {
    TextField,
    MenuItem,
    Typography,
    FormControl,
} from '@mui/material';
import _ from 'lodash'
import { useController } from "react-hook-form";
import { getOr } from './utils'

export default function FastSelect ({
    control,
    defaultValue = "",
    name,
    options = [],
    label,
    disabled = false,
    emptyField = false,
    variant = "outlined",
    ...rest
}) {
    const {
        field,
        // fieldState: { invalid, isTouched, isDirty, error },
        formState: { errors },
    } = useController({
        name,
        control,
        defaultValue: defaultValue,
    });

    return (
        <FormControl fullWidth>
            <TextField
                variant={variant}
                select
                disabled={disabled}
                value={field.value}
                label={label}
                onChange={(event) => field.onChange(event.target.value)}
                error={Boolean(getOr(errors, name, false))}
                helperText={getOr(errors, `${name}.message`, "")}
                {...rest}
            >
                {emptyField && (
                    <MenuItem value="">
                        <Typography style={{ color: "transparent" }}>__</Typography>
                    </MenuItem>
                )}
                {options.map(({ label, value }, idx) => (
                    <MenuItem value={value} key={idx}>
                        <Typography variant="subtitle2" color="inherit">
                            {label}
                        </Typography>
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    );
};
