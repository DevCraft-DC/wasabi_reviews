import { type HTMLAttributes } from 'react';

interface PhoneIntupProps extends HTMLAttributes<HTMLInputElement> {
  phoneNumber: string;
  setPhoneNumber: (arg0: string) => void;
}

export default function PhoneInput({ phoneNumber, setPhoneNumber, className }: PhoneIntupProps) {
  const handleInput = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      className={className}
      type="tel"
      onChange={(e) => {
        handleInput(e.target.value);
      }}
      value={phoneNumber}
      placeholder="Ваш номер телефона..."
    />
  );
}

function formatPhoneNumber(value: string) {
  if (value === '') return value;

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength === 4) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
  }
  if (phoneNumberLength > 4 && phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 8)}`;
  }
  if (phoneNumberLength < 10) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 10)}`;
  }

  if (phoneNumberLength < 12) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9)}`;
  }

  return phoneNumber;
}
