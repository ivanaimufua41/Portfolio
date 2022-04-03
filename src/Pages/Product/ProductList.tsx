import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../Types/DataTypes';

const ProductList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const columns: GridColDef[] = [
        {
            field: 'Id',
            headerName: 'Id',
        },
        {
            field: 'Title',
            headerName: 'Title',
        },
        {
            field: 'LastUpdatedBy',
            headerName: 'Last Updated By',
        },
        {
            field: 'Price',
            headerName: 'Price',
        },
        {
            field: 'Image',
            headerName: 'ImageUrl',
        },
        {
            field: 'OnSale',
            headerName: 'Sale ?',
        },
    ];
    useEffect(() => {
        const getProductData = async () => {
            setIsLoading(true);
            const response = await axios.get('http://localhost:3000/api/products');
            if (response.data.data.length > 0) {
                setProducts(response.data.data);
            }
            setIsLoading(false);
        };
        getProductData();
    }, []);

    return (
        <Box sx={{ height: '100vh', padding: 2 }}>
            {!isLoading && (
                <Box sx={{ width: '100%', height: '100%' }}>
                    <DataGrid rows={products} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection getRowId={(row) => row.Id} />
                </Box>
            )}
        </Box>
    );
};

export default ProductList;
