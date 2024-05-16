export const formatCPF = (value: any) => {
  const cleaned = value.replace(/\D/g, '');
  const limited = cleaned.slice(0, 11);

  const match = limited.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);

  if (match) {
    const formattedCPF = `${match[1]}${match[2] ? '.' + match[2] : ''}${match[3] ? '.' + match[3] : ''}${match[4] ? '-' + match[4] : ''}`;
    return formattedCPF;
  }
  return value;
};
