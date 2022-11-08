import { Input } from 'antd';
import React, { useState } from 'react'
import ReactSelect from 'react-select'



function Select(props) {

  const [Options, setOptions] = useState([
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ]); 

  const Checkbox = ({ children, ...props }) => (
    <label style={{ marginRight: '1em' }}>
      <Input type="checkbox" {...props} />
      {children}
    </label>
  );

  return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={Options[0]}
            isDisabled={props.disabled?true:false}
            isLoading={props.loading?true:false}
            name={props.name}
            options={Options}
        />
  )
}

export default Select
