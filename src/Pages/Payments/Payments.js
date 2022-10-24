import { useQuery } from '@tanstack/react-query';
import React from 'react'
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page';
import { PaymentDayStatusPill } from '../../Components/UI/Table/ReactTable';
import Table from '../../Components/UI/Table/Table';
import { getPendingPayments } from '../../Services/PaymentServices';

function Payments() {

  const { isLoading, isError, data } = useQuery(['getPendingPayments'], getPendingPayments);   


  const getdata = React.useMemo(()=>data, [data]);
  
  const columns = React.useMemo(()=>[
     {
        Header:'Customer',
        accessor:'customer_name'
      },
     {
        Header: "Pending Amount",
        accessor: 'balance'
      },
      {
        Header: "Started At",
        accessor: 'start_date',
      },
      {
        Header: "Ended at",
        accessor: 'due_date',
      },
      {
        Header: "Left in",
        accessor: 'days_left',
        Cell:PaymentDayStatusPill
      },
  ], []);

  return (
    <PrivateLayout>
         <Page  title="Pending Patments">
            {!isLoading && !isError?(
                <Table data={getdata?getdata.data:[]} columns={columns} />
                ):(
                    <p>Loading</p>
              )}
         </Page>
    </PrivateLayout>
  )
}

export default Payments