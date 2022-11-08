import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page'
import { mapResponse } from '../../Helper/Api';
import { createPanel } from '../../Services/PanelService';




function AddPanel() {

  const [form] = Form.useForm();

  const [state, setState] = useState({
    loading:false,
    errors:{},
  });


  const handleFinish = async (inputs) =>{
    setState({
      ...state,
      loading:true,
    });
    await createPanel(inputs)
    .then((res)=>{
        if(res.data.errors){
          toast.error(res.data.message);
        }else{
          toast.success("Nas created Successfully");
          form.resetFields();
        }
        setState({
          ...state,
          errors:{},
          loading:false,
        });
    }).catch((err)=>{
        toast.error(err.response.data.message);
        setState({
          ...state,
          errors:mapResponse(err.response.data),
          loading:false,
        });
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
        <Page title="Add Panel">
          <Card>
            <Form onFinish={handleFinish}
              {...formItemLayout}
              form={form} 
              autoComplete='off'
              size="large">

                  <Form.Item
                        label="Name"
                        validateStatus={state.errors.name?'error':'validating'}
                        name='name' 
                        hasFeedback={state.loading?true:false}
                        help={state.errors.name?state.errors.name:''}
                      >
                        <Input  />
                </Form.Item>

                <Form.Item
                        label="Comments"
                        validateStatus='validating'
                        name='message' 
                        hasFeedback={state.loading?true:false}
                      >
                        <Input  />
                </Form.Item>

                <Form.Item
                      className='text-right flex justify-end pr-10'>
                    
                        <Button 
                              type="primary" 
                              htmlType="submit"
                              size='large'
                              shape='round'
                              loading={state.loading}
                              >
                            Submit
                        </Button>
                  </Form.Item>

            </Form>
          </Card>
        </Page> 
    </PrivateLayout>
  )
}

export default AddPanel