import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page({ title, children }) {
  const navigate = useNavigate();
  return (
    <>
    <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={title}
        extra={[
            <Button key="1" type="primary" onClick={()=>navigate('add')}>
                Add New
            </Button>,
        ]}
        >
        {children}
    </PageHeader>
  </>
  )
}

export default Page