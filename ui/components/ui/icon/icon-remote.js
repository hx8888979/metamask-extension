import React from 'react';
import PropTypes from 'prop-types';

const IconRemote = ({
  size = 24,
  color = 'currentColor',
  ariaLabel,
  className,
}) => (
  <svg
    width={size}
    height={size}
    fill={color}
    className={className}
    aria-label={ariaLabel}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
  >
    <path d="M8.35 40v-3h6.5q-3.2-2.4-5.025-5.425Q8 28.55 8 24.15q0-5 2.95-9.325Q13.9 10.5 19.35 8.8v3.1q-3.55 1.3-5.95 4.65-2.4 3.35-2.4 7.6 0 3.2 1.375 5.875T16.85 34.7v-6.2h3V40ZM30 40q-2.5 0-4.25-1.75T24 34q0-2.4 1.65-4.15Q27.3 28.1 29.7 28q.85-1.8 2.525-2.9Q33.9 24 36 24q2.65 0 4.575 1.725Q42.5 27.45 42.9 30h.1q2.1 0 3.55 1.5Q48 33 48 34.95q0 2.1-1.45 3.575T43 40Zm6.8-18q-.55-2.55-1.9-4.675-1.35-2.125-3.6-4.025v6.2h-3V8h11.5v3h-6.55q2.45 2.05 4.325 5.025Q39.45 19 39.85 22ZM30 37h13q.85 0 1.425-.575Q45 35.85 45 35q0-.85-.575-1.425Q43.85 33 43 33h-2.5v-1.5q0-1.9-1.3-3.2Q37.9 27 36 27q-1.9 0-3.2 1.225Q31.5 29.45 31.5 31H30q-1.25 0-2.125.875T27 34q0 1.25.875 2.125T30 37Zm6-5Z" />
  </svg>
);

IconRemote.propTypes = {
  /**
   * The size of the Icon follows an 8px grid 2 = 16px, 3 = 24px etc
   */
  size: PropTypes.number,
  /**
   * The color of the icon accepts design token css variables
   */
  color: PropTypes.string,
  /**
   * An additional className to assign the Icon
   */
  className: PropTypes.string,
  /**
   * The aria-label of the icon for accessibility purposes
   */
  ariaLabel: PropTypes.string,
};

export default IconRemote;
