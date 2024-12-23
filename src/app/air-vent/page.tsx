import { AirVent, columns } from './columns';
import { DataTable } from './data-table';
import carData from './air-vent-data.json';
// import carData from '../trucks/truck-data.json';
async function getData(): Promise<AirVent[]> {
  // Fetch data from your API here.

  const data = carData.data.map((row) => ({
    ...row,
    Sub: row.Sub ?? '', // Replace null/undefined with an empty string
  }));

  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
