import React from "react";
import Button from '@mui/material/Button'


export const MyButton = ({ text, click, type, color }) => {



    return (
        <>
            <Button onClick={click} variant={type} color={color}>
                {text}
            </Button>

        </>
    )

}