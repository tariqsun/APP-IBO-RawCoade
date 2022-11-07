import { useQuery } from '@tanstack/react-query'
import React from 'react'
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page'
import { deleteNas, getNas } from '../../Services/NasService'
import Table, { ActionPill } from '../../Components/UI/Table/ReactTable'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Nas() {

  const navigate = useNavigate();

  const { isLoading, isError, data, refetch } = useQuery(['fetchNas'], getNas);

  const columns = React.useMemo(()=>[
    {
      Header:'Name',
      accessor:'name'
    },
    {
      Header:'IP',
      accessor:'host'
    },
    {
      Header:'username',
      accessor:'user'
    },
    {
      Header:'Password',
      accessor:'pass'
    },
    {
      Header:'Status',
      accessor:'status'
    },
    {
      Header:'Message',
      accessor:'message'
    },
    {
      Header: "Action",
      accessor: 'id',
      Cell:ActionPill,
      onEdit:(id)=>{
         navigate(`edit/${id}`);
      },
      onDelete:(id)=>{
        deleteNas(id)
        .then((res)=>{
          refetch();
          toast.success("Nas Delete Delete");
        })
        .catch((err)=>{
           toast.error(err.response.data.message);
        })
      }
    },
   ], 
  []);

  const getdata = React.useMemo(()=>data, [data]);

  return (
    <PrivateLayout>
      <Page title="Nas">
          {!isLoading && !isError?(
              <Table data={getdata?getdata.data:[]} columns={columns} />
              ):(
                  <p>Loading</p>
         )}  
      </Page>
    </PrivateLayout>
  )
}

export default Nas