import React from 'react';

interface Props {
  tips: string[];
}

const TipsPanel: React.FC<Props> = ({ tips }) => {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-8 animate-fade-in">
      <h2 className="text-lg font-semibold mb-3 text-indigo-600">Smart Suggestions 💡</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsPanel;
