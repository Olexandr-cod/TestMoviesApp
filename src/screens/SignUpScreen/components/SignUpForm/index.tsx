import React from 'react';
import { TextInput, View, Text } from "react-native"
import { Control, Controller, FieldValues } from 'react-hook-form';
import { cs } from '../../styles';

interface SignUpFormProps {
  control: Control<FieldValues, any>;
  errors: any;
}

const ENTER_EMAIL_TEXT = 'Enter your email';
const ENTER_NAME_TEXT = 'Enter your name';
const ENTER_PASSWORD_TEXT = 'Enter your password';
const ENTER__CONFIRM_PASSWORD_TEXT = 'Enter your confirm password';

const SignUpForm = ({
  control,
  errors,
}: SignUpFormProps) => {
  return (
    <View style={cs.mt15}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              placeholder={ENTER_EMAIL_TEXT}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              keyboardType="email-address"
              style={cs.inputStyle}
            />
          );
        }}
        name="email"
      />
      {errors && errors['data/email'] !== null ? (
        <Text style={cs.errorText}>{errors['data/email']}</Text>
      ) : null}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={ENTER_NAME_TEXT}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            style={cs.inputStyle}
          />
        )}
        name="name"
      />
      {errors && errors['data/name'] !== null ? (
        <Text style={cs.errorText}>{errors['data/name']}</Text>
      ) : null}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={ENTER_PASSWORD_TEXT}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            style={cs.inputStyle}
          />
        )}
        name="password"
      />
      {errors && errors['data/password'] !== null ? (
        <Text style={cs.errorText}>{errors['data/password']}</Text>
      ) : null}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={ENTER__CONFIRM_PASSWORD_TEXT}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            style={cs.inputStyle}
          />
        )}
        name="confirmPassword"
      />
      {errors && errors['data/confirmPassword'] !== null ? (
        <Text style={cs.errorText}>{errors['data/confirmPassword']}</Text>
      ) : null}
    </View>
  );
};

export default SignUpForm;
