export const errorHandler = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = message;
  return error;
};
