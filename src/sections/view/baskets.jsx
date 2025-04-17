'use client';

import { useState, useCallback, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { Iconify } from 'src/components/iconify';

import { EcommerceFilters } from '../ecommerce-filters';
import { EcommerceProductViewGridItem } from '../product/item/ecommerce-product-view-grid-item';



const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

export function BasketsView({ products }) {
  const openMobile = useBoolean();



  const [sort, setSort] = useState('latest');


  const filters = useSetState({

    rating: null,

    price: [0, 0],
  });



  const handleChangeSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const renderList = (
    <>

        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {products?.map((product) => (
            <EcommerceProductViewGridItem key={product.id} product={product} />
          ))}
        </Box>


      <Pagination
        count={10}
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );


  return (
    <Container maxWidth={false} sx={{ overflow: 'hidden',

      paddingLeft: {xs: '10px', lg: '100px' },
      paddingRight: {xs: '10px', lg: '100px' },

    }}>
      <Box display="flex" alignItems="center" sx={{ py: 5 }}>

        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify width={18} icon="solar:filter-outline" />}
          onClick={openMobile.onTrue}
          sx={{ display: { md: 'none' } }}
        >
          Filters
        </Button>
      </Box>

      <Stack direction={{ xs: 'column-reverse', md: 'row' }} sx={{ mb: 10 }}>
        <Stack
          spacing={5}
          divider={<Divider sx={{ borderStyle: 'dashed' }} />}
          sx={{
            flexShrink: 0,
            width: { md: 280 },
          }}
        >
          <EcommerceFilters
            filters={filters}
            open={openMobile.value}
            onClose={openMobile.onFalse}
            options={{
              shippings: ['Fast', 'Saving', 'Free'],
              brands: ['Apple', 'Samsung', 'Xiaomi', 'Honor'],
              tags: ['Books and media', 'Pet', 'Electronics', 'Food', 'Automotive and industrial'],
              categories: [
                'Apple iPhone',
                'Samsung Galaxy',
                'Nike Air Max',
                'Adidas Ultraboost',
                'Sony PlayStation',
              ],
              ratings: ['Up 4 stars', 'Up 3 stars', 'Up 2 stars'],
            }}
          />


        </Stack>

        <Box
          flex="1 1 auto"
          sx={{
            minWidth: 0,
            pl: { md: 8 },
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
            <Box/>
            <FormControl size="small" hiddenLabel sx={{ width: 120 }}>
              <Select value={sort} onChange={handleChangeSort} inputProps={{ id: `sort-select` }}>
                {SORT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {renderList}
        </Box>
      </Stack>
    </Container>
  );
}
