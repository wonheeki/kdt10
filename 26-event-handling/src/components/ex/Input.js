function Input(props) {
  const { setData } = props;
  const handleInput = (e) => {
    const content = e.target.value;
    setData((data) => {
      return { ...data, content };
    });
  };
  return (
    <>
      내용 : <input type="text" onChange={handleInput} />
    </>
  );
}

export default Input;
