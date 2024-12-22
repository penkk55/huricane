import { Truck, columns } from './columns';
import { DataTable } from './data-table';
import * as truckData from './moddata.json';
async function getData(): Promise<Truck[]> {
  // Fetch data from your API here.
  return truckData.data;
}

export default async function TruckPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
