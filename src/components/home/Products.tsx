import { Container, Row } from 'react-bootstrap';
import Product from 'components/common/Product';
import { IProduct } from 'types';
interface IProps {
  products: IProduct[];
}
// const Products = ({ products }: IProduct[]) => { we have to define the types of props object here as it is a props object
const Products = ({ products }: IProps) => {
  console.log({ products });
  return (
    <div>
      <Container>
        <Row>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
