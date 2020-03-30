import Nav from "../components/Nav";
import mockBudget from "../mocks/budget.json";
import { useState } from "react";

const Timer = ({ addActivity }) => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  // TODO: add elapsed time for display

  const startTimer = () => setStartTime(Date.now());
  const stopTimer = () => setEndTime(Date.now());
  const saveActivity = () => addActivity(startTime, endTime);

  return (
    <div>
      <div>{endTime && startTime && endTime - startTime}</div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={saveActivity}>Save</button>
      </div>
    </div>
  );
};

export default () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [activities, setActivities] = useState([]);

  const addActivity = (startTime, endTime) => {
    setActivities([
      ...activities,
      {
        startTime,
        endTime,
        category: selectedCategory
      }
    ]);
  };

  const categoryNames = Object.values(mockBudget).reduce(
    (categoryNames, budgets) => [...categoryNames, ...budgets],
    []
  );

  const handleSubmit = () => {};

  return (
    <div>
      <Nav />
      <div className="px-12 pt-40">
        <form onSubmit={handleSubmit}>
          <select
            onChange={e => setSelectedCategory(e.target.value)}
            name="categories"
            id="categories"
          >
            <option value={null}>None</option>
            {categoryNames.map(category => (
              <option
                key={category.name}
                name={category.name}
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
        </form>
        <Timer addActivity={addActivity} />
        <ul>
          {activities.map(activity => (
            <li key={activity.category}>
              {activity.category}: {activity.endTime - activity.startTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
