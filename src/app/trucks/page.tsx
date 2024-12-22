import { Truck, columns } from './columns';
import { DataTable } from './data-table';
import truckData from './moddata.json';
async function getData(): Promise<Truck[]> {
  // Fetch data from your API here.

  const data = truckData.data.map((row) => ({
    ...row,
    Sub: row.Sub ?? '', // Replace null/undefined with an empty string
  }));

  return data;
}

export default async function TruckPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
