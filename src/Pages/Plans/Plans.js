import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { ActionPill, BolStatusPill } from '../../Components/UI/Table/ReactTable';
import Table from '../../Components/UI/Table/Table'
import { deleteCustomer } from '../../Services/CustomerServices';
import { deletePlan, getPlans } from '../../Services/PlanServices';

function Plans() {

  const navigate = useNavigate();

  const { isLoading, isError, data, refetch } = useQuery(['getPlans'], getPlans);   


  const getdata = React.useMemo(()=>data, [data]);
  
  const columns = React.useMemo(()=>[
     {
        Header:'Plan Name',
        accessor:'name'
      },
     {
        Header: "Price",
        accessor: 'price',
      },
      {
        Header: "Action",
        accessor: 'id',
        Cell:ActionPill,
        onEdit:(id)=>{
           navigate(`edit/${id}`);
        },
        onDelete:(id)=>{
          deletePlan(id)
          .then((res)=>{
            refetch();
            toast.success("customers Delete");
          })
          .catch((err)=>{
             toast.error(err.response.data.message);
          })
       }
    }
  ], []);

  return (
    <PrivateLayout>
       <Page title="All Plans" >
         {!isLoading && !isError?(
            <Table data={getdata?getdata.data:[]} columns={columns} />
            ):(
                <p>Loading</p>
          )}
        </Page>
    </PrivateLayout>
  )
}

export default Plans