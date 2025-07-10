import React from 'react';

interface Props {
  budget: number;
  onChange: (value: number) => void;
}

const SetBudgetForm: React.FC<Props> = ({ budget, onChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Set Monthly Budget</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your monthly budget"
      />
    </div>
  );
};

export default SetBudgetForm;
