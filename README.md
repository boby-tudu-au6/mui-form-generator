# mui-hook-form-generator

[![NPM](https://img.shields.io/npm/v/form-generator.svg)](https://www.npmjs.com/package/form-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save mui-hook-form-generator
```

## Usage

```jsx
import React, { Component } from 'react'

import FormGenerator from 'mui-hook-form-generator'
import { useForm } from 'react-hook-form'

class Example extends Component {
  const { control } = useForm({})
  render() {
    return <FormGenerator
    control={control}
    rootProps={{ spacing: 2 }}
    child={[
      { type: "text", name:"name", label: "Name", gridProps: { xs: 12 }},
      { type: "select", name:"selectField", label: "Select Field", gridProps: { xs: 12 }},
      { type: "password", name:"password", label: "Password", gridProps: { xs: 12 }},
      { type: "date", name:"date", label: "Date", gridProps: { xs: 12 }},
    ]}
    />
  }
}
```

## License

MIT © [](https://github.com/)
