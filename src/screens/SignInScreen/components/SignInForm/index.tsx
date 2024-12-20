import React from 'react';
import { Text, TextInput, View } from "react-native"
import { Control, Controller, FieldValues } from 'react-hook-form';
import { cs } from '../../styles';

interface SignInFormProps {
  control: Control<FieldValues, any>;
  errors: string;
}

const ENTER_EMAIL_TEXT = 'Enter your email';
const ENTER_PASSWORD_TEXT = 'Enter your password';

const SignInForm = ({
  control,
  errors,
}: SignInFormProps) => {
  return (
    <View style={{ marginTop: 15 }}>
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
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={ENTER_PASSWORD_TEXT}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            keyboardType="email-address"
            style={cs.inputStyle}
          />
        )}
        name="password"
      />
      {errors ? (
        <Text style={cs.errorText}>
          {errors}
        </Text>
      ) : null}
    </View>
  );
};

export default SignInForm;
