import { isBoolean, isEmpty, isNil, isNumber, isString, lowerCase, negate, trim } from 'lodash-es';

export const isWhitespace: (value?: string) => boolean = (value) => isEmpty(trim(value));

export const isNotWhitespace: (value?: string) => boolean = negate(isWhitespace);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotEmpty: (value?: any) => boolean = negate(isEmpty);

export const toBoolean: (value?: unknown) => boolean = (value) => {
  if (isNil(value)) {
    return false;
  }

  if (isBoolean(value)) {
    return value;
  }

  if (isString(value)) {
    return lowerCase(value) === 'true';
  }

  if (isNumber(value)) {
    return value !== 0;
  }

  return isEmpty(value);
};
