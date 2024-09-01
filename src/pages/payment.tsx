import { useState } from 'react';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Call your API or payment integration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <button type="submit">Pay</button>
    </form>
  );
};

export default Payment;
