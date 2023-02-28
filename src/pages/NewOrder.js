import { useEffect, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Grid,
  IconButton,
  Input,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import { getProducts } from '../services/products';
import { formatPrice } from '../utils';
import { createOrder } from '../services/orders';

const NewOrder = () => {
  const [products, setProducts] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddProduct = (product) => {
    setOrderProducts([...orderProducts, product]);
  };

  const handleDeleteProduct = (product) => {
    setOrderProducts(orderProducts.filter((item) => item.id !== product.id));
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const { client } = e.target.elements;
    const user = JSON.parse(localStorage.getItem('USER'));
    createOrder({
      client: client.value,
      products: orderProducts,
      status: 'pending',
      userId: user.id,
      total,
    }).then(() => {
      setOrderProducts([]);
      setTotal(0);
      client.value = '';
    });
  };

  useEffect(() => {
    setTotal(orderProducts?.reduce((acc, product) => acc + product.price, 0));
  }, [orderProducts]);

  useEffect(() => {
    getProducts().then((products) => {
      const newProducts = {};
      for (const item of products) {
        const { category, type } = item;
        if (!newProducts[type]) newProducts[type] = {};
        if (!newProducts[type][category]) newProducts[type][category] = [];
        newProducts[type][category].push(item);
      }
      setProducts(newProducts);
    });
  }, []);

  return (
    <SimpleGrid columns={{ lg: '2' }} gap={{ base: '8', lg: '24' }}>
      <Tabs colorScheme='yellow' isFitted size='lg' variant='enclosed'>
        <TabList color='whiteAlpha.700' mb='1em'>
          {Object.keys(products).map((type) => (
            <Tab
              key={type}
              letterSpacing='wider'
              textTransform='uppercase'
              _selected={{
                bg: 'yellow.500',
                border: '1px solid',
                borderColor: 'gray.200',
                color: 'white',
                fontWeight: 'semibold',
              }}
            >
              {type}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.keys(products).map((type) => (
            <TabPanel as={Flex} flexDir='column' gap='8' key={`panel-${type}`}>
              {Object.keys(products[type]).map((category) => (
                <Flex flexDir='column' gap='4' key={category}>
                  <Text
                    fontWeight='semibold'
                    fontSize='lg'
                    letterSpacing='wider'
                    textTransform='uppercase'
                  >
                    {category}
                  </Text>
                  <Flex flexWrap='wrap' gap='6'>
                    {products[type][category].map((product) => (
                      <Button
                        gap='4'
                        key={product.id}
                        onClick={() => handleAddProduct(product)}
                        variant='outline'
                        _hover={{
                          bg: 'yellow.500',
                        }}
                      >
                        <Text>{product.name}</Text>
                        <Text>{formatPrice(product.price)}</Text>
                      </Button>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      <Card
        as='form'
        borderRadius='none'
        h='fit-content'
        onSubmit={handleCreateOrder}
      >
        <CardHeader px={{ base: '4', lg: '12' }} pt={{ base: '4', lg: '8' }}>
          <Text
            fontWeight='semibold'
            fontSize='lg'
            letterSpacing='wider'
            textTransform='uppercase'
          >
            Resumen de la orden
          </Text>
        </CardHeader>
        <CardBody px={{ base: '4', lg: '12' }}>
          <Flex flexDir='column' gap='4'>
            <Input
              name='client'
              placeholder='Nombre del cliente'
              required
              size='lg'
            />
            {orderProducts?.map((product) => (
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
                <IconButton
                  colorScheme='yellow'
                  icon={<CloseIcon />}
                  onClick={() => handleDeleteProduct(product)}
                  size='sm'
                  variant='outline'
                />
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
              <Text>{formatPrice(total)}</Text>
            </Grid>
          </Flex>
        </CardBody>
        <CardFooter px={{ base: '4', lg: '12' }} pb={{ base: '4', lg: '8' }}>
          <Button
            colorScheme='yellow'
            ml='auto'
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
            Enviar orden
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default NewOrder;
