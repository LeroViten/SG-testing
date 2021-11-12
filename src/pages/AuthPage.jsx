import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import './pages.scss';

const initialState = {
  number: '',
  password: '',
};

const phoneRegEx =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const schema = yup
  .object()
  .shape({
    number: yup
      .string('e.g. +380630000000')
      .required('Provide valid phone number')
      .min(13)
      .matches(
        phoneRegEx,
        'Phone number can can consist of numbers, spaces, dashes, brackets and start with + e.g. +380630000000'
      ),
    password: yup
      .string()
      .required('No password provided')
      .min(8, 'Password should be at least 8 characters with Latin letters')
      .matches(passwordRegEx, 'Password can only contain Latin letters.'),
  })
  .required();

export default function AuthPage() {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = data => {
    console.log(data);
    toast.success('Welcome aboard');
    reset();
    navigate('/posts');
  };

  const reset = () => {
    setState(initialState);
  };
  return (
    <>
      <form className="authForm" onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="number">
          <input
            type="tel"
            name="number"
            autoComplete="off"
            className="authForm__input"
            placeholder="Enter your phone number"
            onChange={handleChange}
            {...register('number', { required: true })}
            title="Phone number can consist of numbers, spaces, dashes, brackets and start with +"
          />
        </label>
        <p className="errMessage">{errors?.number?.message}</p>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            autoComplete="off"
            className="authForm__input"
            placeholder="Enter your password"
            onChange={handleChange}
            {...register('password', { required: true })}
            title="Minimum 8 characters with numbers and Latin letters"
          />
        </label>
        <p className="errMessage">{errors?.password?.message}</p>
        <button className="authForm__btn" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}
