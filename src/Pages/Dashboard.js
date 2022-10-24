import React from 'react'
import PrivateLayout from '../Components/Layout/PrivateLayout'
import { FaUserFriends, FaDollarSign } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getCustomersCount } from '../Services/CustomerServices';
import { RiExchangeDollarLine } from 'react-icons/ri' 
import { getPendingThisMonthPayments, getRecoverPayments, getTotalPendingPayments } from '../Services/PaymentServices';
import Layout2 from '../Components/Layout/Layout2';
import { TbUsers } from 'react-icons/tb'
import { Avatar, Col, Row, Skeleton, Space } from 'antd';
import Card from '../Components/Dashboard/Card';
import Meta from 'antd/lib/card/Meta';
import { DollarCircleOutlined, DollarTwoTone } from '@ant-design/icons';


function Dashboard() {

  const customers = useQuery(['getCustomerCount'], getCustomersCount);
  const getCustomer = React.useMemo(()=>customers.data, [customers.data]);

  const monthly = useQuery(['getMonthlyPending'], getPendingThisMonthPayments);
  const getMonthly = React.useMemo(()=>monthly.data, [monthly.data]);

  const totalPending = useQuery(['getTotalPendingAmount'], getTotalPendingPayments);
  const getTotalPending = React.useMemo(()=>totalPending.data, [totalPending.data]);


  const totalRecover = useQuery(['getTotalRecoverPayment'], getRecoverPayments);
  const getTotalRecover = React.useMemo(()=>totalRecover.data, [totalRecover.data]);

  return (
    <Layout2>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={6}>
              <Card label="Total Customers"
                      text={getCustomer?getCustomer.data.count:0}
                      loading={customers.isLoading}
                      className="bg-gradient-to-r from-green-600 to-green-300"
                      icon={<TbUsers />} />
            </Col>
            <Col span={6}>
              <Card  
                     label="Month Dues"
                      text={getMonthly?getMonthly.data:0}
                      className="bg-gradient-to-r from-yellow-600 to-yellow-300"
                      icon={<DollarCircleOutlined />}
                      loading={monthly.isLoading} />
            </Col>
            <Col span={6}>
              <Card label="Pending Amount"
                    className="bg-gradient-to-r from-orange-600 to-orange-300"
                    text={getTotalPending?getTotalPending.data:0}
                    loading={totalPending.isLoading}
                    icon={<DollarCircleOutlined />} />
            </Col>
            <Col span={6}>
            <Card label="Received Amount"
                    className="bg-gradient-to-r from-green-700 to-green-500"
                    text={getTotalRecover?getTotalRecover.data:0}
                    loading={totalRecover.isLoading}
                    icon={<DollarCircleOutlined />} />
            </Col>
          </Row>
      </div>

    </Layout2>
  )
}

export default Dashboard