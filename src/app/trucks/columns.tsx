'use client';

import { Button } from '@/components/ui/button';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

//old
// export type Truck = {
//   stockNo: string;
//   brand: string;
//   sub: string;
//   Engine: string;
//   year: string;
//   eco: string;
//   fabrix: string;
//   hurC: string;
//   hurSLx: string;
// };

// export const columns: ColumnDef<Truck>[] = [
//   {
//     accessorKey: 'stockNo',
//     header: 'Stock No.',
//   },
//   {
//     accessorKey: 'brand',
//     header: 'Brand',
//   },
//   {
//     accessorKey: 'sub',
//     header: 'Sub',
//   },
//   {
//     accessorKey: 'engine',
//     header: 'Engine',
//   },
//   {
//     accessorKey: 'year',
//     header: 'Year',
//   },
//   {
//     accessorKey: 'eco',
//     header: 'Eco',
//   },
//   {
//     accessorKey: 'fabrix',
//     header: 'Fabrix',
//   },
//   {
//     accessorKey: 'hurC',
//     header: 'Hur-C',
//   },
//   {
//     accessorKey: 'hurSLx',
//     header: 'Hur-SLx',
//   },
// ];

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
export type Truck = {
  'Stock No': string | null;
  Brand: string | null;
  Model: string | number | null;
  Sub: string | null;
  Engine: string | null;
  Year: string | null;
  ECO: number | null;
  Fabrix: number | null;
  'Hur-C': number | null;
  'Hur-SL': number | null;
};

export const columns: ColumnDef<Truck>[] = [
  {
    accessorKey: 'Stock No',
    // header: 'Stock No.',
    // header: () => <div className="text-right">Amount</div>,
    // cell: ({ row }) => {
    //   const amount = parseFloat(row.getValue('Stock No'));
    //   const formatted = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //   }).format(amount);

    //   return <div className="text-right font-medium">{formatted}</div>;
    // },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Stock No.
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Brand',

    // header: 'Brand',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Brand
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Model',
    // header: 'Model',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Model
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Sub',
    // header: 'Sub',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Sub
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Engine',
    // header: 'Engine',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Engine
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Year',
    // header: 'Year',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Year
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'ECO',
    // header: 'Eco',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Eco
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Fabrix',
    // header: 'Fabrix',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Fabrix
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Hur-C',
    // header: 'Hur-C',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Hur-C
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Hur-SL',
    // header: 'Hur-SL',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Hur-SL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
