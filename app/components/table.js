import React from "react";

function Table({ columns, rows }) {
  return (
    <div className="bg-primary-gray rounded-[16px] overflow-x-auto">
      <table className="w-full min-w-[640px] text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            {columns.map((column) => (
              <th
                key={column}
                className="p-[16px] lg:p-[24px] text-[14px] font-[600] leading-[1.4] text-primary-yellow whitespace-nowrap"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.map((row) => (
            <tr key={row[0]} className="align-top">
              {row.map((cell, cellIndex) => {
                const isFirst = cellIndex === 0;
                const isLast = cellIndex === row.length - 1;
                return (
                  <td
                    key={cellIndex}
                    className={`p-[16px] lg:p-[24px] text-[16px] leading-[1.5] ${
                      isFirst
                        ? "font-[600] text-white whitespace-nowrap"
                        : "text-white/60"
                    } ${isLast ? "min-w-[320px] w-full" : "min-w-[200px]"}`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
