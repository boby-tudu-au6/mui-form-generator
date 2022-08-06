import React from 'react'
import styles from './styles.module.css'
import FormGenerator from './FormGenerator'

const ExampleComponent = (props) => {
  return <FormGenerator {...props} />
}

export { default as FastSelectFeild } from './fields/FastSelectField'
export { default as FastTextField } from './fields/FastTextField'
export { default as FastPasswordField } from './fields/FastPasswordField'
export { default as FastDatePicker } from './fields/FastDatePicker'

export default ExampleComponent
