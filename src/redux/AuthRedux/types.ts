export interface AuthState {
  loading: boolean;
  isAuth: boolean;
  isToken: string;
  error: Error | null;
}


export type SigninBodyType = {
  email: string | undefined
  password: string | undefined
}

export type SignupBodyType = {
  email: string | undefined
  name: string | undefined
  password: string | undefined
  confirmPassword: string | undefined
}

