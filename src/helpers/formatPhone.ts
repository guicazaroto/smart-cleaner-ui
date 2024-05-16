export const formatPhoneNumber = (value: any) => {
  const cleaned = value.replace(/\D/g, '');
  
  const limited = cleaned.slice(0, 11);
  
  const match = limited.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  if (match) {
    const formattedNumber = !match[2] 
      ? match[1] 
      : `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
    return formattedNumber;
  }
  return value;
};
