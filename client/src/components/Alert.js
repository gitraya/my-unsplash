const Alert = ({ message, color = "dark" }) => {
  let alertClass = "text-gray-700 bg-gray-100";

  if (color === "danger") {
    alertClass = "text-red-700 bg-red-100";
  }

  return (
    <div
      className={`p-4 text-sm rounded-lg break-all ${alertClass}`}
      role="alert"
    >
      {message || "Please wait... submitting your form"}
    </div>
  );
};

export default Alert;
