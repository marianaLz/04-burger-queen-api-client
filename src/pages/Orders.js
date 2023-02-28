import { useEffect, useState } from 'react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react';

import { getOrders, updateOrder } from '../services/orders';
import { formatPrice } from '../utils';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const handleChangeStatus = (id, newStatus = 'delivered') => {
    const order = orders.find((order) => order.id === id);
    order.status = newStatus;
    updateOrder(id, order).then((order) => {
      setOrders((prevOrders) =>
        prevOrders.map((prevOrder) =>
          prevOrder.id === order.id ? order : prevOrder
        )
      );
    });
  };

  useEffect(() => {
    getOrders().then((orders) => {
      setOrders(orders.sort((a, b) => b.id - a.id));
    });
  }, []);

  return (
    <SimpleGrid columns={{ md: '2', lg: '3' }} gap='8'>
      {orders.map((order) => (
        <Card borderRadius='none' key={order.id}>
          <CardHeader px={{ base: '4', lg: '12' }} pt={{ base: '4', lg: '8' }}>
            <Text
              fontWeight='semibold'
              fontSize='lg'
              letterSpacing='wider'
              textTransform='uppercase'
            >
              Orden {order.id}
            </Text>
          </CardHeader>
          <CardBody px={{ base: '4', lg: '12' }}>
            <Flex flexDir='column' gap='4'>
              <Text fontWeight='semibold' letterSpacing='wider'>
                Cliente: {order.client}
              </Text>
              <Text fontWeight='semibold' letterSpacing='wider'>
                Número de vendedor: {order.userId}
              </Text>
              {order.products?.map((product) => (
                <Grid
                  alignItems='center'
                  gap={{ base: '4', lg: '8' }}
                  key={product.id}
                  templateColumns={{
                    base: '8fr 3fr 1fr',
                    lg: '9fr 2fr 1fr',
                  }}
                >
                  <Text>{product.name}</Text>
                  <Text>{formatPrice(product.price)}</Text>
                </Grid>
              ))}
              <Divider />
              <Grid
                alignItems='center'
                fontWeight='semibold'
                gap={{ base: '4', lg: '8' }}
                templateColumns={{
                  base: '8fr 3fr 1fr',
                  lg: '9fr 2fr 1fr',
                }}
              >
                <Text>TOTAL</Text>
                <Text>{formatPrice(order.total)}</Text>
              </Grid>
            </Flex>
          </CardBody>
          <CardFooter px={{ base: '4', lg: '12' }} pb={{ base: '4', lg: '8' }}>
            {order.status === 'pending' ? (
              <ButtonGroup gap='4' w='full'>
                <Button
                  colorScheme='yellow'
                  onClick={() => handleChangeStatus(order.id)}
                  size='lg'
                  variant='outline'
                  w='full'
                  _hover={{
                    bg: 'yellow.500',
                    borderColor: 'yellow.500',
                    color: 'white',
                    fontWeight: 'semibold',
                  }}
                >
                  Completar
                </Button>
                <Button
                  colorScheme='red'
                  onClick={() => handleChangeStatus(order.id, 'canceled')}
                  size='lg'
                  variant='outline'
                  w='full'
                  _hover={{
                    bg: 'red.600',
                    borderColor: 'red.600',
                    color: 'white',
                    fontWeight: 'semibold',
                  }}
                >
                  Cancelar
                </Button>
              </ButtonGroup>
            ) : order.status === 'delivered' ? (
              <Tag colorScheme='green' ml='auto' size='lg' variant='outline'>
                <TagLeftIcon as={CheckCircleIcon} />
                <TagLabel>Completada</TagLabel>
              </Tag>
            ) : (
              <Tag colorScheme='red' ml='auto' size='lg' variant='outline'>
                <TagLeftIcon as={WarningIcon} />
                <TagLabel>Cancelada</TagLabel>
              </Tag>
            )}
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Orders;
