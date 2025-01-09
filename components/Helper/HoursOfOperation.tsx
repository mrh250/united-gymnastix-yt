import React from 'react';

// Define a type for the hours data
type Hours = {
  day: string;
  open: string;
  close: string;
};

// Define the props for the component
interface HoursOfOperationProps {
  title: string;
  hours: Hours[];
}

const HoursOfOperation: React.FC<HoursOfOperationProps> = ({ title, hours }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-center text-yellow-400 mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {hours.map((hour, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-2 bg-gray-800 rounded-md shadow-sm"
          >
            <span className="font-medium text-white">{hour.day}</span>
            <span>
              {hour.open} - {hour.close || 'Closed'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoursOfOperation;
