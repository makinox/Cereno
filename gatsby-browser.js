const React = require("react")
const { GlobalStyles } = require("./src/components/globalStyles/GlobalStyles")

exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
