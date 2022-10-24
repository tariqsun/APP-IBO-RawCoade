import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { ActionPill, BolStatusPill } from '../../Components/UI/Table/ReactTable';
import Table from '../../Components/UI/Table/Table'
import { deleteExpense, getExpense } from '../../Services/ExpenseService';

function Expense() {
  const navigate = useNavigate();
  const { isLoading, isError, data, refetch } = useQuery(['getExpense'], getExpense);
  const getdata = React.useMemo(()=>data, [data]);

  const columns = React.useMemo(()=>[
    {
      Header:'Name',
      accessor:'name'
    },
   {
      Header: "Amount",
      accessor: 'amount',
    },
    {
      Header: "Date",
      accessor: 'expens_date',
    },
    {
      Header: "Action",
      accessor: 'id',
      Cell:ActionPill,
      onEdit:(id)=>{
        navigate(`edit/${id}`);
      },
      onDelete:(id)=>{
        deleteExpense(id)
        .then(()=>{
          toast.success("sexfully deleted");
          refetch();
        }).catch((err)=>{
            toast.error(err.response.data.message);
        })
      }
    }
  ], []);

  return (
    <PrivateLayout>
        <Page title="All Expense" >
           {!isLoading && !isError?(
            <Table data={getdata?getdata.data:[]} columns={columns} />
            ):(
                <p>Loading</p>
          )}
        </Page>
    </PrivateLayout>
  )
}

export default Expense