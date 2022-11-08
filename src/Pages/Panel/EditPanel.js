import { Button, Card, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page'
import { mapResponse } from '../../Helper/Api';
import { createPanel, getPanelById, updatePanel } from '../../Services/PanelService';




function EditPanel() {

  const [form] = Form.useForm();
  const params = useParams();

  const [state, setState] = useState({
    loading:false,
    errors:{},
  });

  useEffect(()=>{

    getPanelById(params.id)
    .then((res)=>{
        form.setFieldsValue({
          name:res.data.name,
          message:res.data.message
        });
    }).catch((err)=>{
        toast.error(err.response.message);
    })

  }, [form]);


  const handleFinish = async (inputs) =>{
    setState({
      ...state,
      loading:true,
    });
    await updatePanel(params.id, inputs)
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
        <Page title="Edit Panel">
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

export default EditPanel