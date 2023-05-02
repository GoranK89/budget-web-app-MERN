const BtnAddTransaction = (props) => {
  return (
    <button
      className="btn-round btn-add-transaction"
      onClick={props.modalHandler}
    >
      {props.open ? "X" : "+"}
    </button>
  );
};

export default BtnAddTransaction;
