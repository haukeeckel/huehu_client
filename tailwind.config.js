module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'error-shake': 'error-shake 0.3s linear',
        'list-shrink': 'list-shrink 0.3s linear',
        'list-grow': 'list-grow 0.3s linear',
      },
      keyframes: {
        'error-shake': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  nohoist: ['**/tailwindcss', '**/@tailwindcss/**'],
};
