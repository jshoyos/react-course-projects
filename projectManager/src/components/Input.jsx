import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

const Input = ({ label, isTextArea, ...props }, ref) => {
  const cssClasses =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {isTextArea && <textarea ref={ref} className={cssClasses} {...props} />}
        {!isTextArea && <input ref={ref} className={cssClasses} {...props} />}
      </p>
    </>
  );
};

Input.displayName = 'Input';
Input.propTypes = {
  label: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool.isRequired
};

export default forwardRef(Input);
