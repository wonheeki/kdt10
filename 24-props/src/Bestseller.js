import book from './book.jpeg';

const Bestseller = (props) => {
  const { title, author, price, type } = props;
  return (
    <div class="bestseller">
      <h2>이번주 베스트셀러</h2>
      {/* <img
        src="https://image.yes24.com/images/chyes24/froala/0/46497/48163.jpg"
        alt="책 이미지"
      ></img> */}
      <img src={book} className="book_img" alt="book_img"></img>
      <div>{title}</div>
      <div>저자:{author}</div>
      <div>판매가:{price}</div>
      <div>구분:{type}</div>
    </div>
  );
};

export default Bestseller;
