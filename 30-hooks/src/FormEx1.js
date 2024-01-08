import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

function FormEx1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState({
    username: '',
    age: 0,
  });
  const result = () => {
    console.log(state);
  };
  return (
    <>
      <form onSubmit={handleSubmit(result)}>
        <input
          text="text"
          placeholder="username"
          {...register('username', {
            required: '이름은 필수 항목입니다.',
          })}
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              username: e.target.value,
            }));
          }}
        />
        {errors.username?.message}

        <br />
        <input
          text="text"
          placeholder="age"
          {...register('age', {
            min: {
              value: 0,
              message: '0 이상의 숫자만 입력 가능합니다',
            },
          })}
          onChange={(e) => {
            setState((prevState) => ({ ...prevState, age: e.target.value }));
          }}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
export default FormEx1;
