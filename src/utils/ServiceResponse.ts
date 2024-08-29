type ServiceErrorMessage = {
  error_code: string;
  error_description: string;
};

type ServiceResponseErrorType = 'INVALID_DATA'
| 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT' | 'INVALID' | 'BAD_REQUEST' | 'INTERNAL_SERVER_ERROR';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceErrorMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = {
  status: 'SUCCESSFUL' | 'CREATED' | ServiceResponseErrorType;
  data: T | ServiceErrorMessage;
};





