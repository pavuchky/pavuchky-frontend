import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { addOrder } from 'services/api';
import { orderValidationSchema } from '../../utils/validationSchema';
import Icon from '../../assets/images/sprite.svg';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Gratitude } from 'components/Gratitude/Gratitude';
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
  RadioButtons,
  RadioContainer,
  RadioLabel,
  SquareRadio,
} from './OrderForm.styled';

export const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const typeBaseOptions = [
    { value: t('forms.kapron'), label: t('forms.kapron') },
    { value: t('forms.plastic'), label: t('forms.plastic') },
  ];

  const materialOptions = [
    { value: t('forms.cotton'), label: t('forms.cotton') },
    { value: t('forms.spunbond'), label: t('forms.spunbond') },
  ];

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
    validationSchema: orderValidationSchema,
    onSubmit: async values => {
      try {
        await addOrder(values);
        setSubmitted(true);
        toast.success('Дані успішно відправлені!');
      } catch (error) {
        setSubmitted(false);
        toast.error(
          'Виникла помилка під час відправки форми. Спробуйте ще раз.'
        );
      }
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
    <>
      {submitted ? (
        <Gratitude
          title="Дякуємо, що обрали саме нас!"
          text="Ми зв’яжемось з вами у найближчий час"
          variant="primary"
        />
      ) : (
        <FormContainer>
          <FormTitle>Вкажіть ваші дані</FormTitle>
          <FormList onSubmit={formik.handleSubmit}>
            <FormBlocks>
              <label>
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
              </label>
              <label>
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
              </label>
              <label>
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
              </label>
              <label>
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
              </label>
              <label>
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
              </label>
            </FormBlocks>

            <FormBlocks>
              <label>
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
              </label>

              <div>
                <FormText>Вид основи</FormText>
                <CustomSelect
                  name="typeBase"
                  placeholder="Виберіть вид основи сітки"
                  options={typeBaseOptions}
                  value={typeBaseOptions.find(
                    option => option.value === typeBase
                  )}
                  onChange={selectedOption =>
                    formik.setFieldValue('typeBase', selectedOption.value)
                  }
                />
                {formik.touched.typeBase && formik.errors.typeBase ? (
                  <FormValidation>{formik.errors.typeBase}</FormValidation>
                ) : null}
              </div>
              <div>
                <FormText>Матеріал</FormText>
                <CustomSelect
                  name="material"
                  placeholder="Виберіть матеріал"
                  options={materialOptions}
                  value={materialOptions.find(
                    option => option.value === material
                  )}
                  onChange={selectedOption =>
                    formik.setFieldValue('material', selectedOption.value)
                  }
                />
                {formik.touched.material && formik.errors.material ? (
                  <FormValidation>{formik.errors.material}</FormValidation>
                ) : null}
              </div>

              <label>
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
              </label>

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
      )}
    </>
  );
};
