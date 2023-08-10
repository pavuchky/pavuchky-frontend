import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Icon from '../../assets/images/sprite.svg';
import {
  FormBlocks,
  FormBtn,
  FormContainer,
  FormInput,
  FormList,
  FormText,
  FormTitle,
  FormValidation,
  HiddenRadio,
  IconContainer,
  RadioButtons,
  RadioContainer,
  RadioLabel,
  SelectIcon,
  SquareRadio,
} from './OrderForm.styled';
import { customStyles } from './customStyles';

export const OrderForm = () => {
  const typeBaseOptions = [
    { value: 'Капрон', label: 'Капрон' },
    { value: 'Пластик', label: 'Пластик' },
  ];

  const materialOptions = [
    { value: 'Бавовна', label: 'Бавовна' },
    { value: 'Спанбонд', label: 'Спанбонд' },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your name.'),
    position: Yup.string().required('Please enter your position.'),
    militaryUnit: Yup.string().required('Please enter your military unit.'),
    phone: Yup.string()
      .required('Please enter your phone number.')
      .matches(/^\+?[\d\s-]+$/, 'Invalid phone number'),
    gridSize: Yup.string().required('Please enter grid size.'),
    typeBase: Yup.string().required('Please enter type base.'),
    material: Yup.string().required('Please enter material.'),
    color: Yup.string().required('Please enter color.'),
    loops: Yup.string().required('Please enter loops.'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      position: '',
      militaryUnit: '',
      phone: '',
      comment: '',
      gridSize: '',
      typeBase: '',
      material: '',
      color: '',
      loops: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  const {
    name,
    position,
    militaryUnit,
    phone,
    comment,
    gridSize,
    typeBase,
    material,
    color,
    loops,
  } = formik.values;
  return (
    <FormContainer>
      <FormTitle>Вкажіть ваші дані</FormTitle>
      <FormList onSubmit={formik.handleSubmit}>
        <FormBlocks>
          <div>
            <FormText>ПІБ</FormText>
            <FormInput
              type="text"
              name="name"
              placeholder="Іващук Іван Петрович"
              autoComplete="username"
              value={name}
              onChange={formik.handleChange}
              hasValue={name.length > 0}
            />
            {formik.touched.name && formik.errors.name ? (
              <FormValidation>{formik.errors.name}</FormValidation>
            ) : null}
          </div>
          <div>
            <FormText>Ваша посада</FormText>
            <FormInput
              type="text"
              name="position"
              placeholder="Молодший лейтинант"
              value={position}
              onChange={formik.handleChange}
              hasValue={position.length > 0}
            />
            {formik.touched.position && formik.errors.position ? (
              <FormValidation>{formik.errors.position}</FormValidation>
            ) : null}
          </div>
          <div>
            <FormText>Номер військової частини/бригади</FormText>
            <FormInput
              type="text"
              name="militaryUnit"
              placeholder="3 Окрема мотострілкова бригада"
              value={militaryUnit}
              onChange={formik.handleChange}
              hasValue={militaryUnit.length > 0}
            />
            {formik.touched.militaryUnit && formik.errors.militaryUnit ? (
              <FormValidation>{formik.errors.militaryUnit}</FormValidation>
            ) : null}
          </div>
          <div>
            <FormText>Ваш номер телефону</FormText>
            <FormInput
              type="text"
              name="phone"
              placeholder="+380 98 200 77 49"
              autoComplete="tel"
              value={phone}
              onChange={formik.handleChange}
              hasValue={phone.length > 0}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <FormValidation>{formik.errors.phone}</FormValidation>
            ) : null}
          </div>
          <div>
            <FormText>Додаткові коментарі</FormText>
            <FormInput
              type="text"
              name="comment"
              placeholder="Якщо потрібно"
              autoComplete="off"
              value={comment}
              onChange={formik.handleChange}
              hasValue={comment.length > 0}
            />
          </div>
        </FormBlocks>

        <FormBlocks>
          <div>
            <FormText>Розмір сітки</FormText>
            <FormInput
              type="text"
              name="gridSize"
              placeholder="8х4м"
              value={gridSize}
              onChange={formik.handleChange}
              hasValue={gridSize.length > 0}
            />
            {formik.touched.gridSize && formik.errors.gridSize ? (
              <FormValidation>{formik.errors.gridSize}</FormValidation>
            ) : null}
          </div>

          <div>
            <FormText>Вид основи</FormText>
            <IconContainer>
              <Select
                name="typeBase"
                placeholder="Виберіть вид основи сітки"
                options={typeBaseOptions}
                value={typeBaseOptions.find(
                  option => option.value === typeBase
                )}
                onChange={selectedOption =>
                  formik.setFieldValue('typeBase', selectedOption.value)
                }
                hasValue={typeBase.length > 0}
                styles={customStyles}
              />
              <SelectIcon>
                <use href={Icon + '#icon-down'}></use>
              </SelectIcon>
            </IconContainer>
            {formik.touched.typeBase && formik.errors.typeBase ? (
              <FormValidation>{formik.errors.typeBase}</FormValidation>
            ) : null}
          </div>
          <div>
            <FormText>Матеріал</FormText>
            <IconContainer>
              <Select
                name="material"
                placeholder="Виберіть матеріал"
                options={materialOptions}
                value={materialOptions.find(
                  option => option.value === material
                )}
                onChange={selectedOption =>
                  formik.setFieldValue('material', selectedOption.value)
                }
                hasValue={material.length > 0}
                styles={customStyles}
              />
              <SelectIcon>
                <use href={Icon + '#icon-down'}></use>
              </SelectIcon>
            </IconContainer>

            {formik.touched.material && formik.errors.material ? (
              <FormValidation>{formik.errors.material}</FormValidation>
            ) : null}
          </div>

          <div>
            <FormText>Колір сітки</FormText>
            <FormInput
              type="text"
              name="color"
              placeholder="30% зелені 70% суха трава"
              value={color}
              onChange={formik.handleChange}
              hasValue={color.length > 0}
            />
            {formik.touched.color && formik.errors.color ? (
              <FormValidation>{formik.errors.color}</FormValidation>
            ) : null}
          </div>

          <div>
            <FormText>Петлі для кріплення</FormText>
            <RadioButtons>
              <RadioContainer>
                <HiddenRadio
                  name="loops"
                  value="yes"
                  checked={loops === 'yes'}
                  onChange={formik.handleChange}
                />
                <SquareRadio>
                  <svg>
                    <use href={Icon + '#icon-check'}></use>
                  </svg>
                </SquareRadio>
                <RadioLabel>Так</RadioLabel>
              </RadioContainer>
              <RadioContainer>
                <HiddenRadio
                  name="loops"
                  value="no"
                  checked={loops === 'no'}
                  onChange={formik.handleChange}
                />
                <SquareRadio>
                  <svg>
                    <use href={Icon + '#icon-check'}></use>
                  </svg>
                </SquareRadio>
                <RadioLabel>Ні</RadioLabel>
              </RadioContainer>
            </RadioButtons>
            {formik.touched.loops && formik.errors.loops ? (
              <FormValidation>{formik.errors.loops}</FormValidation>
            ) : null}
          </div>
        </FormBlocks>

        <FormBtn type="submit">Замовити</FormBtn>
      </FormList>
    </FormContainer>
  );
};
