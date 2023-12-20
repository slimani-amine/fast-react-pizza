import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [userName, setuserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName) {
      return;
    }
    dispatch(updateName(userName));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className=" mb-4 text-sm text-stone-600 md:text-base ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        className="input mb-8 w-72"
      />

      {userName !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
