// src/pages/auth/signin.tsx
import { signIn } from 'next-auth/react';

const SignIn = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    await signIn('credentials', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input name="email" type="email" required />
      </label>
      <label>
        Password:
        <input name="password" type="password" required />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
