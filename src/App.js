import './App.css';
import DatePicker from 'sassy-datepicker';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Tooltip,
  Center
} from '@chakra-ui/react';

function App() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" >
                <FormLabel>Time</FormLabel>
                <Input 
                  type="time" 
                  placeholder="TTTT" />
              </FormControl>
              <DatePicker />
            </Stack>
          </Box>
        </Stack>
      </Flex>
  );
}
export default App;
