import { useState } from 'react';
import './CustomSelect.css';

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const CustomSelect = ({ label, options, value, onChange, placeholder }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select">
      <label className="select-label">
        {label}
      </label>
      <div className="select-wrapper">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`select-button ${isOpen ? 'active' : ''}`}
        >
          <span className={`select-value ${value ? 'has-value' : ''}`}>
            {value || placeholder}
          </span>
          <svg 
            className="select-chevron"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="options-container">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="option-item"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;