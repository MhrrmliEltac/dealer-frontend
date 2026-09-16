const PHONE_PREFIX = "+994";
const PHONE_MAX_DIGITS = 9;

const sanitizePhoneValue = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  const rest = digits.startsWith("994") ? digits.slice(3) : digits;
  return PHONE_PREFIX + rest.slice(0, PHONE_MAX_DIGITS);
};

export { sanitizePhoneValue, PHONE_PREFIX, PHONE_MAX_DIGITS };
