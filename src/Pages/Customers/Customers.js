import { useQuery } from '@tanstack/react-query'
import React from 'react'
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import { deleteCustomer, getCustomers } from '../../Services/CustomerServices';
import Table from '../../Components/UI/Table/Table'
import { ActionPill, BolStatusPill } from '../../Components/UI/Table/ReactTable';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Page from '../../Components/Page';

function Customers() {

  const navigate = useNavigate();
  const { isLoading, isError, data, refetch } = useQuery(['getCustomers'], getCustomers);   


  const getdata = React.useMemo(()=>data, [data]);
  
  const columns = React.useMemo(()=>[
     {
        Header:'Customer ID',
        accessor:'customer_id'
      },
     {
        Header: "name",
        accessor: 'name',
      },
      {
        Header: "email",
        accessor: 'email',
      },
      {
        Header: "Phone Number",
        accessor: 'phone_number',
      },
      {
        Header: "Status",
        accessor: 'status',
        Cell: BolStatusPill,
      },
      {
        Header: "Plan",
        accessor: 'plan_name',
      },
      {
        Header: "Action",
        accessor: 'id',
        Cell:ActionPill,
        phoneAccessor:'phone_number',
        onEdit:(id)=>{
           navigate(`edit/${id}`);
        },
        onDelete:(id)=>{
          deleteCustomer(id)
          .then((res)=>{
            refetch();
            toast.success("customers Delete");
          })
          .catch((err)=>{
             toast.error(err.response.data.message);
          })
        }

      },
  ], []);
  


  return (
    <PrivateLayout>
         <Page title="All Customers" >
            {!isLoading && !isError?(
              <Table data={getdata?getdata.data:[]} columns={columns} />
              ):(
                  <p>Loading</p>
            )}
          </Page>
    </PrivateLayout>
  )
}

export default Customers