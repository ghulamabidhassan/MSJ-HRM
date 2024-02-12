const AlertPage = ({ type, message }) => {
  return <div className={`alert-page ${type}`}>{message}</div>;
};

export default AlertPage;
