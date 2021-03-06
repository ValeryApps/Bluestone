import React from 'react'
import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'

const CustomeTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !!meta.error}>
         <label >{label}</label>
         <input {...field} {...props}/>
         {meta.touched && meta.error? (
             <Label color="red" basic>{meta.error}</Label>
         ):null}
        </FormField>
    )
}

export default CustomeTextInput
