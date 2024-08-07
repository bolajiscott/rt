'use server';

import { supabase } from '../lib/supabaseClient';

export async function signupAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  console.log(email, password, firstname, lastname, formData);

  if (!email || !password || !firstname || !lastname) {
    return { error: 'All fields are required' };
  }

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstname,
          lastname,
        },
      },
    });

    if (error) {
      console.log(error);
      //   return { error: error.message };
      throw error;
    }

    return {
      user,
      message:
        'Signup successful. Please check your email to confirm your account.',
    };
  } catch (error) {
    console.error('Signup error:', error);
    return { error: 'Internal server error' };
  }
}

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
      //   return { error: error.message };
    }

    // Store the session in a cookie or session storage if necessary
    return { user, session, message: 'Login successful' };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Internal server error' };
  }
}
