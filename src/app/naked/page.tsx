import { Naked, columns } from './columns';
import { DataTable } from './data-table';
import NakedData from './naked-data.json';
// import carData from '../trucks/truck-data.json';
async function getData(): Promise<Naked[]> {
  // Fetch data from your API here.

  const data = NakedData.data.map((row) => ({
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
