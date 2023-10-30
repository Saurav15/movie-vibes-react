/**
 * Regular expression for validating email addresses.
 * @type {RegExp}
 */
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

/**
 * Regular expression for validating strong passwords.
 * @type {RegExp}
 */
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

/**
 * Regular expression for validating full names.
 * @type {RegExp}
 */
const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

/**
 * Validates the full name.
 * @param {string} fullName - The full name to validate.
 * @returns {string|null} - An error message or null if validation succeeds.
 */
const validateFullName = (fullName) => {
  return !fullNameRegex.test(fullName) ? "Enter a valid Name." : null;
};

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {string|null} - An error message or null if validation succeeds.
 */
const validateEmail = (email) => {
  return !emailRegex.test(email) ? "Enter a valid Email." : null;
};

/**
 * Validates a password for strength.
 * @param {string} password - The password to validate.
 * @returns {string|null} - An error message or null if validation succeeds.
 */
const validatePassword = (password) => {
  return !passwordRegex.test(password) ? "Password has to be strong." : null;
};

/**
 * Validates form input for signing up.
 * @param {string} fullName - The full name entered in the sign-up form.
 * @param {string} email - The email entered in the sign-up form.
 * @param {string} password - The password entered in the sign-up form.
 * @returns {Object} - An object containing error messages, if any.
 */
export const signUpValidation = (fullName, email, password) => {
  const fullNameValidation = validateFullName(fullName);
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const errorMessage = {};

  if (fullNameValidation) {
    errorMessage.fullName = fullNameValidation;
  }

  if (emailValidation) {
    errorMessage.email = emailValidation;
  }

  if (passwordValidation) {
    errorMessage.password = passwordValidation;
  }

  return errorMessage;
};

/**
 * Validates form input for signing in.
 * @param {string} email - The email entered in the sign-in form.
 * @param {string} password - The password entered in the sign-in form.
 * @returns {Object} - An object containing error messages, if any.
 */
export const signInValidation = (email, password) => {
  const errorMessage = {};

  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  if (emailValidation) {
    errorMessage.email = emailValidation;
  }

  if (passwordValidation) {
    errorMessage.password = passwordValidation;
  }

  return errorMessage;
};
