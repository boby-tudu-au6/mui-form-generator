import React, { useState } from 'react';
import {
    InputAdornment,
    TextField,
    IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useController } from "react-hook-form";
import { getOr } from './utils'

export default function PasswordField({
    onFocus,
    control,
    name,
    inputProps = {},
    label,
    variant = "outlined",
    disabled = false,
    readOnly = false,
    rows = "",
    multiline = false,
    InputProps,
}) {
    const [showPassword, setShowPassword] = useState(false)

    const {
        field,
        formState: { errors },
    } = useController({
        name,
        control,
    });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    return (
        <TextField
            multiline={multiline}
            rows={rows}
            disabled={disabled}
            fullWidth
            variant={variant}
            label={label}
            type={!showPassword ? 'password' : "text"}
            onFocus={onFocus ? onFocus : () => { }}
            onChange={(e) => field.onChange(e.target.value)} // send value to hook form
            onBlur={() => field.onBlur()} // notify when input is touched/blur
            value={field.value || ""} // input value
            name={name} // send down the input name
            inputRef={field.ref} // send input ref, so we can focus on input when error appear
            inputProps={inputProps}
            InputProps={{
                ...InputProps,
                readOnly: readOnly,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            error={Boolean(getOr(errors, name, false))}
            helperText={getOr(errors, `${name}.message`, "")}
        />
    );
};