export default function TableSkeleton() {
    return (
      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-5 text-left">Week</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-b">
                <td className="p-5">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                </td>
  
                <td>
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                </td>
  
                <td>
                  <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200" />
                </td>
  
                <td>
                  <div className="h-4 w-10 animate-pulse rounded bg-gray-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }