import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

import { login } from '../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({
      email: email.value,
      password: password.value,
    })
      .then(({ user }) => {
        localStorage.setItem('USER', JSON.stringify(user));
        navigate('/ordenes');
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    const user = localStorage.getItem('USER');
    if (user) {
      navigate('/ordenes');
    }
  }, [navigate]);

  return (
    <Flex align='center' bg='black' justify='center' minH='100vh'>
      <Card as='form' borderRadius='none' onSubmit={handleSubmit}>
        {error && (
          <Alert justifyContent='center' status='error'>
            <AlertIcon />
            Correo o contraseña incorrectos
          </Alert>
        )}
        <CardHeader px={{ base: '4', lg: '12' }} py={{ base: '4', lg: '8' }}>
          <Text
            align='center'
            fontWeight='semibold'
            fontSize='xl'
            letterSpacing='wider'
            textTransform='uppercase'
          >
            Inicia sesión
          </Text>
        </CardHeader>
        <CardBody
          as={Flex}
          flexDir='column'
          gap='8'
          px={{ base: '4', lg: '12' }}
          w={{ base: 'full', md: 'md' }}
        >
          <FormControl>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              name='email'
              onClick={() => setError(null)}
              placeholder='Correo electrónico'
              required
              size='lg'
              type='email'
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input
              name='password'
              onClick={() => setError(null)}
              placeholder='Contraseña'
              required
              size='lg'
              type='password'
            />
          </FormControl>
        </CardBody>
        <CardFooter px={{ base: '4', lg: '12' }} py={{ base: '4', lg: '8' }}>
          <Button
            colorScheme='yellow'
            mx='auto'
            size='lg'
            type='submit'
            variant='outline'
            _hover={{
              bg: 'yellow.500',
              borderColor: 'yellow.500',
              color: 'white',
              fontWeight: 'semibold',
            }}
          >
            Iniciar sesión
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default Login;
