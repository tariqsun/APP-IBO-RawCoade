import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrivateLayout from '../../Components/Layout/PrivateLayout'
import Page from '../../Components/Page'
import { ActionPill } from '../../Components/UI/Table/ReactTable';
import Table from '../../Components/UI/Table/Table';
import { deletePanel, getPanel } from '../../Services/PanelService';

function Panels() {

  const navigate = useNavigate();

  const { isLoading, isError, data, refetch } = useQuery(['fetchPanel'], getPanel);

  const columns = React.useMemo(()=>[
    {
      Header:'Name',
      accessor:'name'
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
        deletePanel(id)
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
        <Page title="Panels">
          {!isLoading && !isError?(
                <Table data={getdata?getdata.data:[]} columns={columns} />
                ):(
                    <p>Loading</p>
          )}  
        </Page>
    </PrivateLayout>
  )
}

export default Panels