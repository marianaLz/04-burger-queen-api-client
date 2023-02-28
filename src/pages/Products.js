import React, { useEffect, useState } from 'react';
import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../services/products';
import { formatPrice } from '../utils';

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    const { name, price, type, category } = e.target.elements;

    createProduct({
      name: name.value,
      price: price.value,
      type: type.value,
      category: category.value,
    }).then((product) => {
      setProducts((prevProducts) => [...prevProducts, product]);
      onClose();
    });
  };

  const handleEdit = (id) => {
    getProduct(id).then((product) => {
      setProduct(product);
      onOpen();
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, price, type, category } = e.target.elements;

    updateProduct(product.id, {
      name: name.value,
      price: price.value,
      type: type.value,
      category: category.value,
    }).then((product) => {
      setProducts((prevProducts) =>
        prevProducts.map((prevProduct) =>
          prevProduct.id === product.id ? product : prevProduct
        )
      );
      setProduct(null);
      onClose();
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    });
  };

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <React.Fragment>
      <Flex justify='space-between'>
        <Heading size='lg'>Productos</Heading>
        <Button
          onClick={onOpen}
          variant='outline'
          _hover={{
            bg: 'yellow.500',
          }}
        >
          Nuevo producto
        </Button>
      </Flex>

      <TableContainer overflowY='scroll'>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th color='white'>Nombre</Th>
              <Th color='white'>Menú</Th>
              <Th color='white'>Categoría</Th>
              <Th color='white'>Precio</Th>
              <Th color='white'>Editar</Th>
              <Th color='white'>Eliminar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.name}>
                <Td>{product.name}</Td>
                <Td>{product.type}</Td>
                <Td>{product.category}</Td>
                <Td>{formatPrice(product.price)}</Td>
                <Td>
                  <IconButton
                    colorScheme='yellow'
                    icon={<EditIcon />}
                    onClick={() => handleEdit(product.id)}
                    size='sm'
                    variant='outline'
                  />
                </Td>
                <Td>
                  <IconButton
                    colorScheme='red'
                    icon={<CloseIcon />}
                    onClick={() => handleDelete(product.id)}
                    size='sm'
                    variant='outline'
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as='form'
          borderRadius='none'
          onSubmit={product === null ? handleCreate : handleUpdate}
          px={{ base: '4', lg: '12' }}
          py='8'
        >
          <ModalHeader letterSpacing='wider' textTransform='uppercase'>
            {product === null ? 'Crear producto' : 'Editar producto'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody as={Flex} flexDir='column' gap='8'>
            <Input
              name='name'
              placeholder='Nombre'
              required
              size='lg'
              defaultValue={product?.name}
            />
            <Input
              name='price'
              placeholder='Precio'
              required
              size='lg'
              type='number'
              defaultValue={product?.price}
            />
            <Select
              name='type'
              placeholder='Menú al que pertenece'
              required
              size='lg'
              defaultValue={product?.type}
            >
              <option value='Desayuno'>Desayuno</option>
              <option value='Almuerzo'>Almuerzo</option>
            </Select>
            <Select
              name='category'
              placeholder='Categoría'
              required
              size='lg'
              defaultValue={product?.category}
            >
              <option value='Café'>Café</option>
              <option value='Alimentos'>Alimentos</option>
              <option value='Bebidas'>Bebidas</option>
              <option value='Hamburguesas'>Hamburguesas</option>
              <option value='Acompañamientos'>Acompañamientos</option>
            </Select>
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
              Guardar
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default Products;
