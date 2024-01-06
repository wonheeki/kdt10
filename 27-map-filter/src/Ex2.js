import React, { useState } from 'react';

const Ex2 = () => {
  const [state, setState] = useState([]);
  const [inputWriter, setWriter] = useState('');
  const [inputTitle, setTitle] = useState('');

  const [type, setType] = useState('writer');
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const addTr = () => {
    if (inputWriter.trim().length == 0 || inputTitle.trim().length == 0) return;
    let newState = {
      writer: inputWriter,
      title: inputTitle,
    };

    setState([...state, newState]);
    setWriter('');
    setTitle('');
  };

  const viewAll = () => {
    setResult(state);
    setSearch('');

    console.log(result);
  };

  // 4번
  const searchContent = () => {
    let searchResult = state.filter((item) => {
      console.log(item); // comment에 대한 각 원소(객체)
      console.log(item[type]); // 검색 조건(key)에 대한 value 값
      console.log(item[type].includes(search)); // true or false

      // 검색결과 없음; null 반환
      if (!item[type].includes(search)) {
        return null;
      }

      // 검색결과 있음; 검색결과(배열) 반환
      return item;
    });

    // 검색 결과 state 설정
    setResult(searchResult);
    setSearch('');
  };

  return (
    <>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        작성자 :{' '}
        <input
          onChange={(e) => {
            setWriter(e.target.value);
            // console.log(writer);
          }}
        />
        &nbsp;&nbsp; 제목 :{' '}
        <input
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(title);
          }}
        />
        &nbsp;&nbsp;
        <button onClick={addTr}>작성</button>
      </div>
      <p>
        <select
          onChange={(e) => {
            setType(e.target.value);
            console.log(type);
          }}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        &nbsp;&nbsp;
        <input
          type="text"
          placeholder="검색어"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
        &nbsp;&nbsp;
        <button onClick={searchContent}>검색</button>
        <button onClick={viewAll}>전체</button>
      </p>
      <table
        style={{
          border: '1px solid black',
          width: '300px',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>번호</th>
            <th style={{ border: '1px solid black' }}>제목</th>
            <th style={{ border: '1px solid black' }}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {state.map((value, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid black' }}>{idx + 1}</td>
              <td style={{ border: '1px solid black' }}>{value.title}</td>
              <td style={{ border: '1px solid black' }}>{value.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {result == 0 && '검색결과가 없습니다.'}
      {result == 0 || (
        <div>
          <p>검색 결과</p>
          <table
            style={{
              border: '1px solid black',
              width: '300px',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                <th style={{ border: '1px solid black' }}>번호</th>
                <th style={{ border: '1px solid black' }}>제목</th>
                <th style={{ border: '1px solid black' }}>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => (
                <tr key={idx}>
                  <td style={{ border: '1px solid black' }}>{idx + 1}</td>
                  <td style={{ border: '1px solid black' }}>{value.title}</td>
                  <td style={{ border: '1px solid black' }}>{value.writer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Ex2;
