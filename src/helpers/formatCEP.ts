export const formatCEP = (value: any) => {
  const cleaned = value.replace(/\D/g, '');
  const limited = cleaned.slice(0, 8);
  const match = limited.match(/^(\d{0,5})(\d{0,3})$/);

  if (match) {
    const formattedCEP = `${match[1]}${match[2] ? '-' + match[2] : ''}`;
    return formattedCEP;
  }
  return value;
};
