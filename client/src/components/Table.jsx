import { useEffect } from "react";
import { useApp } from "../context/AppContext";

export const Table = ({ data }) => {
  const { limit, updatePages, pages, activePage } = useApp();

  const tableHeaders = data.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      if (!acc.includes(key)) {
        acc.push(key);
      }
    });
    return acc;
  }, []);

  useEffect(() => {
    updatePages(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, data]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left rtl:text-right text-black ">
        <thead className="text-base capitalize font-bold">
          <tr>
            {tableHeaders?.map((head) => (
              <th
                key={head}
                scope="col"
                className="px-6 py-3 border-r-2 bg-white"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pages[activePage]?.map(({ id, name, quantity, price }) => (
            <tr
              key={id}
              className="odd:bg-gray-100 even:bg-white font-medium order-b border-y-2"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap border-r-2"
              >
                {id}
              </th>
              <td className="px-6 py-4 border-r-2">{name}</td>
              <td className="px-6 py-4 border-r-2">{quantity}</td>
              <td className="px-6 py-4 border-r-2">{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
