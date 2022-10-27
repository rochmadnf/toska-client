export const Input = (props) => (
  <input
    {...props}
    className="form-input rounded focus:border-blue-500 border-gray-300 focus:ring focus:ring-blue-200 w-full transition duration-300"
  />
);

export const Label = ({ children, ...props }) => (
  <label {...props} className="text-sm mb-2 block capitalize">
    {children}
  </label>
);

export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="px-4 h-10 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring focus:ring-gray-600"
  >
    {children}
  </button>
);

export const ErrorMessage = ({ message }) => (
  <div className="mt-2 font-medium text-red-500 text-xs">{message}</div>
);
