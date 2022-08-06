import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useController } from "react-hook-form";
import { getOr } from './utils'

export default function FastTextField({
    control,
    name,
    inputAdornment,
    inputProps = {},
    label,
    variant = "outlined",
    disabled = false,
    readOnly = false,
    type = "text",
    rows = "",
    multiline = false,
    InputProps,
}) {
    const {
        field,
        // fieldState: { invalid, isTouched, isDirty },
        formState: {
            // touchedFields, dirtyFields, 
            errors },
    } = useController({
        name,
        control,
        defaultValue: "",
    });

    return (
        <TextField
            multiline={multiline}
            rows={rows}
            disabled={disabled}
            fullWidth
            variant={variant}
            label={label}
            type={type}
            onChange={(e) => field.onChange(e.target.value)} // send value to hook form
            onBlur={() => field.onBlur()} // notify when input is touched/blur
            value={field.value || ""} // input value
            name={name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
            inputProps={inputProps}
            InputProps={{
                ...InputProps,
                readOnly: readOnly,
                endAdornment: <InputAdornment position="end">{inputAdornment}</InputAdornment>,
            }}
            error={Boolean(getOr(errors, name, false))}
            helperText={getOr(errors, `${name}.message`, "")}
        />
    );
};