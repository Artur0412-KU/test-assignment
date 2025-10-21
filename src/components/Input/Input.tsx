import React, { useState } from 'react';
import { GoEye } from 'react-icons/go';
import { GrHide } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';

const Input = ({
  type = 'text',
  clearable = false,
  ...props
}) => {
  const [value, setValue] = useState('');
  const [inputType, setInputType] = useState(type);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const clearInput = () => setValue('');

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        {...props}
        type={inputType}
        value={value}
        onChange={handleChange}
        style={{
          paddingRight: type === 'password' || clearable ? '4rem' : '0.5rem',
          padding: '10px'
        }}
      />
      {/* Password Toggle Button */}
      {type === 'password' && (
        <div style={{
          position: 'absolute',
          right: '0.1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '6px',
          padding: '2px'
        }}>
          <button
            type="button"
            onClick={toggleVisibility}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              outline: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {inputType === 'password' ? (
              <GoEye size={24}/>
            ) : <GrHide size={24}/>}
          </button>
        </div>
      )}
      {/* Clear Button */}
      {clearable && value && (
        <div style={{
          position: 'absolute',
          right: type === 'password' ? '2.7rem' : '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '6px',
          padding: '2px'
        }}>
          <button
            type="button"
            onClick={clearInput}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: type === 'text' ? '0px' : '10px',
              outline: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IoMdClose size={24}/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;

