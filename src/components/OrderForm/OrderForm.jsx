import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useFetchPost } from 'hooks/useFetchPost';
import { orderValidationSchema } from '../../utils/validationSchema';
import Icon from '../../assets/images/sprite.svg';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Gratitude } from 'components/Gratitude/Gratitude';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { Loader } from 'components/Loader/Loader';
import {
  FormBlocks,
  FormBtn,
  FormContainer,
  FormInfo,
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
  const { isLoading, fetchPost } = useFetchPost();

  const typeBaseOptions = [
    { value: t('orderForm.nylon'), label: t('orderForm.nylon') },
    { value: t('orderForm.plastic'), label: t('orderForm.plastic') },
  ];

  const materialOptions = [
    { value: t('orderForm.cotton'), label: t('orderForm.cotton') },
    { value: t('orderForm.spunbond'), label: t('orderForm.spunbond') },
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
        await fetchPost('/order', values);
        setSubmitted(true);
        toast.success(t('forms.success'));
      } catch (error) {
        setSubmitted(false);
        toast.error(t('forms.error'));
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
      {isLoading ? (
        <Loader />
      ) : submitted ? (
        <Gratitude
          title={t('orderForm.thank')}
          text={t('forms.contact')}
          variant="primary"
        />
      ) : (
        <FormContainer>
          <FormTitle>{t('forms.data')}</FormTitle>
          <FormList onSubmit={formik.handleSubmit}>
            <FormBlocks>
              <label>
                <CustomInput
                  title={t('forms.name')}
                  type="text"
                  name="name"
                  placeholder={t('forms.namePl')}
                  autoComplete="username"
                  value={name}
                  onChange={formik.handleChange}
                  hasValue={name.length > 0}
                  touched={formik.touched.name}
                  error={formik.errors.name}
                />
              </label>
              <label>
                <CustomInput
                  title={t('orderForm.position')}
                  type="text"
                  name="position"
                  placeholder={t('orderForm.positionPl')}
                  autoComplete="off"
                  value={position}
                  onChange={formik.handleChange}
                  hasValue={position.length > 0}
                />
              </label>
              <label>
                <CustomInput
                  title={t('orderForm.militaryUnit')}
                  type="text"
                  name="militaryUnit"
                  placeholder={t('orderForm.militaryUnitPl')}
                  autoComplete="off"
                  value={militaryUnit}
                  onChange={formik.handleChange}
                  hasValue={militaryUnit.length > 0}
                />
              </label>
              <label>
                <CustomInput
                  title={t('forms.number')}
                  type="text"
                  name="phone"
                  placeholder="+380XXXXXXXXX"
                  autoComplete="tel"
                  value={phone}
                  onChange={formik.handleChange}
                  hasValue={phone.length > 0}
                  touched={formik.touched.phone}
                  error={formik.errors.phone}
                />
              </label>
              <label>
                <CustomInput
                  title={t('forms.comments')}
                  type="text"
                  name="comment"
                  placeholder={t('forms.commentsPl')}
                  autoComplete="off"
                  value={comment}
                  onChange={formik.handleChange}
                  hasValue={comment.length > 0}
                />
              </label>
            </FormBlocks>

            <FormBlocks>
              <label>
                <CustomInput
                  title={t('orderForm.size')}
                  type="text"
                  name="gridSize"
                  placeholder={t('orderForm.sizePl')}
                  autoComplete="off"
                  value={gridSize}
                  onChange={formik.handleChange}
                  hasValue={gridSize.length > 0}
                  touched={formik.touched.gridSize}
                  error={formik.errors.gridSize}
                />
              </label>

              <div>
                <FormText>{t('orderForm.type')}</FormText>
                <CustomSelect
                  name="typeBase"
                  placeholder={t('orderForm.typePl')}
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
                <FormText>{t('orderForm.fabric')}</FormText>
                <CustomSelect
                  name="material"
                  placeholder={t('orderForm.fabricPl')}
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
                <CustomInput
                  title={t('orderForm.color')}
                  type="text"
                  name="color"
                  placeholder={t('orderForm.colorPl')}
                  autoComplete="off"
                  value={color}
                  onChange={formik.handleChange}
                  hasValue={color.length > 0}
                  touched={formik.touched.color}
                  error={formik.errors.color}
                />
              </label>

              <div>
                <FormText>{t('orderForm.loops')}</FormText>
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
                    <RadioLabel>{t('orderForm.yes')}</RadioLabel>
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
                    <RadioLabel>{t('orderForm.no')}</RadioLabel>
                  </RadioContainer>
                </RadioButtons>
                {formik.touched.loops && formik.errors.loops ? (
                  <FormValidation>{formik.errors.loops}</FormValidation>
                ) : null}
              </div>
            </FormBlocks>
            <FormInfo>{t('forms.info')}</FormInfo>
            <FormBtn type="submit">{t('orderForm.submit')}</FormBtn>
          </FormList>
        </FormContainer>
      )}
    </>
  );
};
