import { useState, Fragment } from "react";

const mockBudget = {
  "Career Development": [
    {
      category: "Coding",
      budgeted: 0.5 * 3,
      activity: 0.2
    },
    {
      category: "Blogging",
      budgeted: 0.5 * 3,
      activity: 0.2
    }
  ],
  Health: [
    {
      category: "Sleep",
      budgeted: 8 * 7,
      activity: 24,
      categoryGroup: "Health"
    },
    {
      category: "Eating",
      budgeted: 3 * 7,
      activity: 9,
      categoryGroup: "Health"
    },
    {
      category: "Working out",
      budgeted: 0.5 * 3,
      activity: 0.2,
      categoryGroup: "Health"
    }
  ]
};

export default () => {
  const [budget, setBudget] = useState(mockBudget);
  const arrSum = (arr, key) => arr.reduce((sum, curr) => (sum += curr[key]), 0);

  const addCategory = group => {
    const initialCategoryInfo = {
      budgeted: 0,
      activity: 0,
      category: `${group} Category`
    };
    const newBudget = {
      ...budget,
      [group]: [initialCategoryInfo, ...budget[group]]
    };
    setBudget(newBudget);
  };

  return (
    <div className="pt-40">
      <div className="max-w-2xl mx-auto">
        <table className="w-full border border-gray-500 table-fixed">
          <thead className="uppercase text-xs font-normal text-right text-gray-600">
            <tr>
              <th className="w-56 px-4 py-2 font-normal text-left">Category</th>
              <th className="px-4 py-2 font-normal">Budgeted</th>
              <th className="px-4 py-2 font-normal">Time Used</th>
              <th className="px-4 py-2 font-normal">Available</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {Object.entries(budget).map(([categoryGroup, rows]) => {
              const totalBudgeted = arrSum(rows, "budgeted");
              const totalUsed = arrSum(rows, "activity");
              const totalLeft = totalBudgeted - totalUsed;
              return (
                <Fragment key={categoryGroup}>
                  <tr className="bg-blue-200">
                    <td
                      onClick={() => addCategory(categoryGroup)}
                      className="border-t border-gray-500 border-b text-base px-4 py-2"
                    >
                      {categoryGroup}
                    </td>
                    <td className="text-right border-t border-gray-500 border-b px-4 py-2">
                      {totalBudgeted} hours
                    </td>
                    <td className="text-right border-t border-gray-500 border-b px-4 py-2">
                      {totalUsed} hours
                    </td>
                    <td className="text-right border-t border-gray-500 border-b px-4 py-2">
                      {totalLeft} hours
                    </td>
                  </tr>
                  {rows.map(row => (
                    <tr key={row.category}>
                      <td className="border-t border-gray-500 border-b px-4 py-2">
                        {row.category}
                      </td>
                      <td className="text-right border-t border-gray-500 border-b px-4 py-2">
                        {row.budgeted} hours
                      </td>
                      <td className="text-right border-t border-gray-500 border-b px-4 py-2">
                        {row.activity} hours
                      </td>
                      <td className="text-right border-t border-gray-500 border-b px-4 py-2">
                        {row.budgeted - row.activity} hours
                      </td>
                    </tr>
                  ))}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
