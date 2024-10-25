import { Box, BoxProps } from '../Box'

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box className="px-6 md:px-[60px]" mx="auto" maxWidth="1440px" {...props}>
    {children}
  </Box>
)

export default Container
