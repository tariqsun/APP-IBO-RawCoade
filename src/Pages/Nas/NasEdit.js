import { Button, Card, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page'
import { mapResponse } from '../../Helper/Api';
import { createNas, getNasById, updateNas } from '../../Services/NasService';

function NasEdit() {
  const params = useParams();

  const [form] = Form.useForm();

  const [state, setState] = useState({
    loading:false,
    data:{},
    errors:{},
  });

  useEffect(()=>{
    setState({
      ...state,
      loading:true
    });

    getNasById(params.id)
    .then((res)=>{
      form.setFieldsValue({
        name:res.data.name,
        ip:res.data.ip,
        username:res.data.username,
        password:res.data.password
      });
      setState({
        ...state,
        loading:false
      });
    }).catch((err)=>{
        toast.error(err.response.data.message);
        setState({
          ...state,
          loading:false
        });
    });

  }, [form]);

  const handleFinish = async (inputs) =>{
    setState({
      ...state,
      loading:true,
    });
    await updateNas(params.id, inputs)
    .then((res)=>{
        if(res.data.errors){
          toast.error(res.data.message);
        }else{
          toast.success("Nas updated Successfully");
        }
        setState({
          ...state,
          errors:{},
          loading:false,
        });
    }).catch((err)=>{
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
      <Page title="Edit Nas">
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
                      label="Host / Ip"
                      validateStatus={state.errors.ip?'error':'validating'}
                      name='ip' 
                      hasFeedback={state.loading?true:false}
                      help={state.errors.ip?state.errors.ip:''}
                    >
                      <Input  />
              </Form.Item>

              <Form.Item
                      label="Username"
                      validateStatus={state.errors.ip?'error':'validating'}
                      name='username' 
                      hasFeedback={state.loading?true:false}
                      help={state.errors.username?state.errors.username:''}
                    >
                      <Input  />
              </Form.Item>

              <Form.Item
                      label="Password"
                      validateStatus={state.errors.password?'error':'validating'}
                      name='password' 
                      hasFeedback={state.loading?true:false}
                      help={state.errors.password?state.errors.password:''}
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
                          Update
                      </Button>
                </Form.Item>

          </Form>

         </Card>
      </Page>

    </PrivateLayout>
  )
}

export default NasEdit