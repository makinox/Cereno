const React = require('react');
const { GlobalStyles } = require('./src/components/globalStyles/GlobalStyles');
const { CartProvider } = require('./src/utils/context/context');

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    {element}
  </CartProvider>
);
