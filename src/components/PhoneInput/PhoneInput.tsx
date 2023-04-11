interface PhoneIntupProps {
  phoneNumber: string;
  setPhoneNumber: (arg0: string) => void;
}

export default function PhoneInput({ phoneNumber, setPhoneNumber }: PhoneIntupProps) {
  const handleInput = (e: string) => {
    const formattedPhoneNumber = formatPhoneNumber(e);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      maxLength={15}
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
  return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(
    4,
    7
  )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9)}`;
}
