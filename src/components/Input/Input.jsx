import React from "react";

export default function InputField({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-md bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-orange-400 transition-colors duration-200"
      />
    </div>
  );
}
