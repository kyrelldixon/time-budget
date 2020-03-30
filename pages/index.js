import { useState, Fragment } from "react";
import Popover, { ArrowContainer } from "react-tiny-popover";

import Nav from "../components/Nav";
import mockBudget from "../mocks/budget.json";

export default () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [budget, setBudget] = useState(mockBudget);
  const arrSum = (arr, key) => arr.reduce((sum, curr) => (sum += curr[key]), 0);

  const addCategory = (group, name) => {
    const initialCategoryInfo = {
      budgeted: 0,
      activity: 0,
      name: name || `${group} Category`
    };
    const newBudget = {
      ...budget,
      [group]: [initialCategoryInfo, ...budget[group]]
    };
    setBudget(newBudget);
  };

  const handleCategoryChange = e => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addCategory(selectedCategory, categoryName);
    setCategoryName("");
    setSelectedCategory("");
  };

  return (
    <>
      <Nav />

      <div className="pt-40">
        <div className="max-w-2xl mx-auto">
          <table className="w-full border border-gray-500 table-fixed">
            <thead className="text-xs font-normal text-right text-gray-600 uppercase">
              <tr>
                <th className="w-56 px-4 py-2 font-normal text-left">
                  Category
                </th>
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
                      <Popover
                        isOpen={selectedCategory === categoryGroup}
                        position={"bottom"}
                        onClickOutside={() => {
                          setSelectedCategory("");
                        }}
                        content={({ position, targetRect, popoverRect }) => (
                          <ArrowContainer
                            position={position}
                            targetRect={targetRect}
                            popoverRect={popoverRect}
                            arrowSize={10}
                            arrowStyle={{ opacity: 0.7 }}
                          >
                            <form
                              className="p-4 bg-white border rounded"
                              onSubmit={handleSubmit}
                            >
                              <input
                                className="px-2 py-1 border border-blue-400 rounded"
                                placeholder="Enter a category"
                                required
                                value={categoryName}
                                onChange={handleCategoryChange}
                              />
                              <hr className="my-3 border" />
                              <button
                                className="px-2 py-1 text-sm text-white bg-blue-400 rounded"
                                type="submit"
                              >
                                Submit
                              </button>
                            </form>
                          </ArrowContainer>
                        )}
                      >
                        <td
                          onClick={() => setSelectedCategory(categoryGroup)}
                          className="px-4 py-2 text-base border-t border-b border-gray-500"
                        >
                          {categoryGroup}
                        </td>
                      </Popover>
                      <td className="px-4 py-2 text-right border-t border-b border-gray-500">
                        {totalBudgeted} hours
                      </td>
                      <td className="px-4 py-2 text-right border-t border-b border-gray-500">
                        {totalUsed} hours
                      </td>
                      <td className="px-4 py-2 text-right border-t border-b border-gray-500">
                        {totalLeft} hours
                      </td>
                    </tr>
                    {rows.map(row => (
                      <tr key={row.name}>
                        <td className="px-4 py-2 border-t border-b border-gray-500">
                          {row.name}
                        </td>
                        <td className="px-4 py-2 text-right border-t border-b border-gray-500">
                          {row.budgeted} hours
                        </td>
                        <td className="px-4 py-2 text-right border-t border-b border-gray-500">
                          {row.activity} hours
                        </td>
                        <td className="px-4 py-2 text-right border-t border-b border-gray-500">
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
    </>
  );
};
