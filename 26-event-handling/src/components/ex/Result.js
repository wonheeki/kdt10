function Result({ data }) {
  const { fruit, background, color, content } = data;
  return (
    <>
      {/* public 경로 안의 이미지 */}
      <img src={`${fruit}.png`} width={100} height={100} alt={fruit} />
      {/* text */}
      <div
        style={{
          marginTop: '10px',
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
      </div>
    </>
  );
}

export default Result;
