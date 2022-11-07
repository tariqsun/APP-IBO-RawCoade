import { useQuery } from '@tanstack/react-query'
import { AutoComplete, Button, Card, DatePicker, Form, Input, Radio } from 'antd';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { mapResponse } from '../../Helper/Api';
import { createCustomers } from '../../Services/CustomerServices';
import { getPlans } from '../../Services/PlanServices'

function AddCustomer() {

   const [form] = Form.useForm();

  const [state, setState] = useState({
    loading:false,
    errors:{}
  });

  const [options, setOptions] = useState([]);

  const { isLoading, isError, data }  = useQuery(['getPlans'], getPlans)

  useEffect(()=>{
    if(typeof data !== 'undefined'){
      let plan_options = [];
      data.data.forEach(element => {
        plan_options.push({label:element.name,value:element.id});
      });
      setOptions(plan_options);
    }
  }, [data]);

  
 

  const handleSubmit = (e) =>{

       setState({
         ...state,
         loading:true
       });

       createCustomers({...e})
       .then((res)=>{
          toast.success("Success Fully added");
          // restState();
          setState({
            ...state,
            loading:false
          });
          console.log(res);
       })
       .catch((err)=>{
            let e_res = mapResponse(err.response.data);
            setState({
              ...state,
              errors:{...e_res},
              loading:false
            });

            toast.error(e_res.message);
       })

  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  
  };



  return (
    <PrivateLayout>
        <Page title="Add Customer">
          <Card>
              <Form onFinish={handleSubmit} 
                {...formItemLayout} 
                autoComplete='off'
                size="large">

                  <Form.Item
                      label="Customer ID"
                      validateStatus="validating"
                      name='customer_id' 
                      hasFeedback={state.loading?true:false}
                      help=""
                    >
                       <Input  />
                  </Form.Item>

                  <Form.Item
                      label="Name"
                      validateStatus={state.errors.name?'error':'validating'}
                      name='name' 
                      hasFeedback={state.loading?true:false}
                      help={state.errors.name?state.errors.name:''}
                    >
                       <Input />
                  </Form.Item>

                  <Form.Item
                      label="Email"
                      validateStatus="validating"
                      name='email' 
                      hasFeedback={state.loading?true:false}
                      help=""
                    >
                       <Input  />
                  </Form.Item>

                  <Form.Item
                      label="Discount"
                      validateStatus="validating"
                      name='discount' 
                      hasFeedback={state.loading?true:false}
                      help=""
                    >
                       <Input  type='number'  />
                  </Form.Item>

                  <Form.Item
                      label="Phone Number"
                      validateStatus={state.errors.phone_number?'error':'validating'}
                      name='phone_number'
                      hasFeedback={state.loading?true:false}
                      help={state.errors.phone_number?state.errors.phone_number:''}
                    >
                       <Input type='number'/>
                  </Form.Item>
                  
                  <Form.Item
                      label="Password"
                      validateStatus="validating"
                      hasFeedback={state.loading?true:false}
                      name="password"

                    >
                       <Input.Password allowClear />
                  </Form.Item>

                  <Form.Item
                      label="Plan"
                      name='plan' 
                      hasFeedback={state.loading && isLoading?true:false}
                      validateStatus={state.errors.plan?'error':'validating'}
                      help={state.errors.plan?state.errors.plan:''}
                    >
                       <AutoComplete
                          options={options}
                          style={{ width:'100%' }}  />
                  </Form.Item>

                 

                  <Form.Item
                      label="Start Date"
                      name='start_date' 
                      hasFeedback={state.loading?true:false}
                      validateStatus={state.errors.start_date?'error':'validating'}
                      help={state.errors.start_date?state.errors.start_date:''}
                    >
                       <DatePicker  style={{ width: '100%' }}/>
                  </Form.Item>

                  

                  <Form.Item
                      label="Status"
                      validateStatus="validating"
                      name="status"  
                      hasFeedback={state.loading?true:false}
                      help=""
                      
                      initialValue="0"
                    >
                      <Radio.Group>
                        <Radio value="1">Activate</Radio>
                        <Radio value="0">Disactive</Radio>
                      </Radio.Group>
                      
                  </Form.Item>

                  <Form.Item
                    
                    className='text-right flex justify-end pr-10'>
                  
                      <Button 
                            type="primary" 
                            htmlType="submit"
                            size='large'
                            shape='round'
                            loading={state.loading}>
                          Submit
                      </Button>
                </Form.Item>

              </Form>
          </Card>
        </Page>

    </PrivateLayout>
  )
}

export default AddCustomer