function Select(props) {
  const setData = props.setData;
  return (
    <>
      과일 :{' '}
      <select
        onChange={(e) => {
          // data state 값의 fruit 값을 변경하기
          console.log(e.target.value);

          setData((data) => {
            // spread 연산자
            // 이전의 data state (객체 형태)
            // ...data : 이전 값 그대로
            // fruit 값만 변경이 일어나서 fruit만 바꿔준다
            return { ...data, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :{' '}
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, background: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :{' '}
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, color: e.target.value };
          });
        }}
      >
        <option value="white">하양</option>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
