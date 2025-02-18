import React from "react";

export  interface  IInputFileInterface extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?:string,
    onFileSelect?: (files:File[]) => void
}