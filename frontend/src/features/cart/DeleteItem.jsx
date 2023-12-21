import React from 'react';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

export default function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      delete
    </Button>
  );
}
