import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../../Components/Layout/PrivateLayout'
import Page from '../../../Components/Page';
import { ActionPill, BolStatusPill } from '../../../Components/UI/Table/ReactTable';
import Table from '../../../Components/UI/Table/Table';
import { deleteExpenseCategory, getExpenseCategory } from '../../../Services/ExpenseService';

function ExpenseCategory() {

  const navigate = useNavigate();
  const { isLoading, isError, data, refetch } = useQuery(['getExpenseCategory'], getExpenseCategory);

  const getdata = React.useMemo(()=>data, [data]);
  const columns = React.useMemo(()=>[
    {
      Header:'Name',
      accessor:'name'
    },
   {
      Header: "Status",
      accessor: 'status',
      Cell:BolStatusPill
    },
    {
      Header: "Action",
      accessor: 'id',
      Cell:ActionPill,
      onEdit:(id)=>{
        navigate(`edit/${id}`);
      },
      onDelete:(id)=>{
        deleteExpenseCategory(id)
        .then(()=>{
          toast.success("sexfully deleted");
          refetch();
        }).catch((err)=>{
            toast.error(err.response.data.message);
        })
      }
    },
  ], []);

  return (
    <PrivateLayout>
        <Page title="Expense Categories">
           {!isLoading && !isError?(
              <Table data={getdata?getdata.data:[]} columns={columns} />
              ):(
                  <p>Loading</p>
            )}
        </Page>
    </PrivateLayout>
  )
}

export default ExpenseCategory