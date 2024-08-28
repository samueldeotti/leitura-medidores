type ServiceErrorMessage = {

  error_code: string;

  error_description: string;

};

type ServiceResponseErrorType = 'INVALID_DATA'
| 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT' | 'INVALID' | 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceErrorMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = {
  status: 'SUCCESSFUL' | 'BAD_REQUEST' | 'NOT_FOUND';

  data: T | ServiceErrorMessage;

};





