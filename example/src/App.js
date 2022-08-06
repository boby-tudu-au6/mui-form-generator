import React from 'react'
import ExampleComponent from 'form-generator'
import 'form-generator/dist/index.css'
import { useForm } from 'react-hook-form'

const App = () => {
  const { control } = useForm({})
  return <div>
    <ExampleComponent
      rootProps={{
        spacing: 2
      }}
      control={control} child={[
        { name: "name", label: "name", type: "password", gridProps: { xs: 12 } },
        { name: "date", label: "Date", type: "date", gridProps: { xs: 12 } }
      ]} />
  </div>
}

export default App
