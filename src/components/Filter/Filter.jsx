import React from 'react';
import { Label, Input } from './Filter-styled';
import { foundedContact } from '../../redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(foundedContact(e.target.value));
  };

  return (
    <Label>
      Search
      <Input
        minLength={1}
        debounceTimeout={300}
        type="text"
        onChange={onChange}
        value={filter}
        placeholder="Search by name..."
      />
    </Label>
  );
};
