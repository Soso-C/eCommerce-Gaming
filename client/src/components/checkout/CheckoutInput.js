import React, { forwardRef } from "react";

export const CheckoutInput = forwardRef(
  ({ error, placeholder, type, id, ...rest }, ref) => {
    return (
      <div className="w-full">
        <input
          className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
          type={type}
          placeholder={placeholder}
          id={id}
          {...rest}
          ref={ref}
        />
        {error && (
          <span className="text-red-500 text-sm font-medium">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default CheckoutInput;
