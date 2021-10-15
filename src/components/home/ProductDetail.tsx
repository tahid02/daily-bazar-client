import useAsync from 'hooks/useAsync';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import productService from 'services/productService';
import { IProduct } from 'types';
interface IParams {
  id: string;
}
const ProductDetail = () => {
  const { id } = useParams<IParams>();
  const { data, isLoading } = useAsync(() => productService.getProductByID(id));
  console.log('product detail data', data);
  return (
    <div>
      product detail page
      <Container>
        <div className="wrapper"></div>
      </Container>
    </div>
  );
};

export default ProductDetail;
