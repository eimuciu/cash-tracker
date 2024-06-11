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

export default function DataInflow({
  selectCategory,
}: {
  selectCategory: string[];
}) {
  const [dateValue, setDateValue] = React.useState<string>('');
  const [dateError, setDateError] = React.useState<string>('');
  const [selectValue, setSelectValue] = React.useState<string>('');

  React.useEffect(() => {
    setSelectValue(selectCategory[0]);
  }, [selectCategory]);

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
      // AWAITING DATA START
      alert(
        JSON.stringify(
          { ...values, date: dateValue, category: selectValue },
          null,
          2,
        ),
      );
      // AWAITING DATA FINISH
      bag.resetForm();
    },
  });

  return (
    <div className="flex flex-col h-[100%]">
      <div className="text-[#880D1E] text-[12px]">
        {dateError && dateError}{' '}
      </div>
      <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
      <SelectPicker
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        selectData={selectCategory}
      />
      <form onSubmit={formik.handleSubmit} className="flex flex-col h-[100%]">
        <div
          className={commonClasses + ' ' + 'flex flex-col'}
          style={{ padding: 0 }}
        >
          <input
            id="amountInput"
            name="amount"
            className={commonClasses + ' outline-none mb-0'}
            style={{ marginBottom: 0 }}
            placeholder="0.00"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.amount}
          />
          <div className="text-[#880D1E] text-[10px] px-[5px]">
            {formik.errors.amount && formik.errors.amount}
          </div>
        </div>

        <div
          className={commonClasses + ' ' + 'grow outline-none flex flex-col'}
          style={{ padding: 0 }}
        >
          <textarea
            name="note"
            className={commonClasses + ' ' + 'h-[100%] mb-0'}
            placeholder="note"
            onChange={formik.handleChange}
            value={formik.values.note}
          />
          <div className="text-[#880D1E] text-[10px] px-[5px]">
            {formik.errors.note && formik.errors.note}
          </div>
        </div>
        <button
          type="submit"
          className="text-center w-[100%] rounded  bg-[#F5F5F5] py-[5px] mt-[5px]"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
