'use client';

import React from 'react';
import DatePicker from './datepicker';
import SelectPicker from './selectPicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';

const commonClasses = 'w-[100%] mb-[10px] p-[5px] rounded';

const validationChema = Yup.object().shape({
  amount: Yup.number()
    .positive('Must be a positive value')
    .required('Required'),
  note: Yup.string().required('Required'),
});

// AWAITING DATA
const selectData = ['one', 'two', 'three', 'four'];

export default function DataInflow() {
  const [dateValue, setDateValue] = React.useState<string>('');
  const [dateError, setDateError] = React.useState<string>('');
  const [selectValue, setSelectValue] = React.useState<string>(selectData[0]);

  const formik = useFormik({
    initialValues: {
      amount: '',
      note: '',
    },
    validationSchema: validationChema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values, bag) => {
      if (dateValue === 'Invalid Date') {
        setDateError('Invalid Date');
        return;
      }
      setDateError('');
      alert(
        JSON.stringify(
          { ...values, date: dateValue, category: selectValue },
          null,
          2,
        ),
      );
      bag.resetForm();
    },
  });

  return (
    <div className="flex flex-col h-[100%]">
      <div className="text-[#880D1E] text-[12px]">{dateError && dateError}</div>
      <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
      <SelectPicker
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        selectData={selectData}
      />
      <form onSubmit={formik.handleSubmit} className="flex flex-col h-[100%]">
        <div className="text-[#880D1E] text-[12px]">
          {formik.errors.amount && formik.errors.amount}
        </div>
        <input
          id="amountInput"
          name="amount"
          className={commonClasses + ' outline-none'}
          placeholder="0.00"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.amount}
        />
        <div className="text-[#880D1E] text-[12px]">
          {formik.errors.note && formik.errors.note}
        </div>
        <textarea
          name="note"
          className={commonClasses + ' ' + 'grow outline-none'}
          placeholder="note"
          onChange={formik.handleChange}
          value={formik.values.note}
        />
        <button
          type="submit"
          className="text-center w-[100%] rounded bg-[#F5F5F5] border border-black border-solid py-[5px] mt-[5px]"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
