import { Avatar, Badge, Button, Card, Divider, Modal } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { THEME_VARIABLES } from '../config';
import { Order, Product } from '../interfaces';
import { DeepPartial } from '../types';

const StyledCard: any = styled(Card)`
  margin-top: 8px;
  border-radius: 7px;
  width: 100%;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
  padding: 0.5rem;

  h1 {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    .ant-card-body {
      flex-direction: column;
    }

    width: 100%;
    flex-basis: 100%;
  }

  .ant-card-body {
    width: 100%;
    display: flex;
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
  }

  .ant-btn-group {
    min-width: 8rem;
  }

  .ant-avatar > img {
    object-fit: cover;
    border: 4px solid #fff;
    border-radius: 45px;
  }

  .ant-avatar {
    left: 10px;
    margin-left: -23px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .products {
    flex: 1;
  }

  .description {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      margin: 0;
      color: ${(props: any) => props.state};
    }

    .price {
      margin-right: 2%;
    }

    .state {
      margin-left: 2%;
    }

    .divider {
      height: 2rem;
      top: 0;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .price {
    margin: 0;
  }

  .info {
    flex: 1;

    button {
      color: ${THEME_VARIABLES['@primary-color']};
      border: 0;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
    }
  }
`;

interface ProductListProps {
  products: Partial<Product>[];
  badgeColor: string;
}

const ProductList: FunctionComponent<ProductListProps> = ({
  products,
  badgeColor
}) => {
  return (
    <div className="product-list">
      {products.map((product, index) => {
        if (product.quantity! > 1) {
          return (
            <Badge
              count={product.quantity}
              key={index}
              offset={[-3, 3]}
              style={{
                backgroundColor: badgeColor
              }}
            >
              <Avatar src={product.image} size={45} className="avatar" />
            </Badge>
          );
        }

        return (
          <Avatar
            src={product.image}
            size={45}
            key={index}
            className="avatar"
          />
        );
      })}
    </div>
  );
};

interface OrderProps {
  order: DeepPartial<Order>;
}

const OrderCard: FunctionComponent<OrderProps> = ({
  order: { products, state: orderState, table, comment, id }
}) => {
  const SIZE = 5;
  const slicedProducts = products!.slice(0, SIZE);

  const price = products!
    .reduce((acc, pro) => acc + pro.quantity! * pro.price!, 0)
    .toFixed(2);

  if (slicedProducts.length === 4) {
    slicedProducts.push({ image: '/static/placeholder.png' });
  }

  const handleClick = () => {
    const title = id ? `Order № ${id}` : 'Order';
    Modal.info({
      title,
      content: <>{comment}</>
    });
  };

  const state: any = {};

  if (orderState === 0) {
    state.msg = 'Placed';
    state.color = THEME_VARIABLES['@primary-color'];
  } else if (orderState === 1) {
    state.msg = 'Accepted';
    state.color = '#00FF99';
  } else if (orderState === 2) {
    state.msg = 'Finished';
    state.color = '#59AFFF';
  } else {
    state.msg = 'Declined';
    state.color = '#FF4747';
  }

  return (
    <StyledCard state={state.color}>
      <div className="products">
        <ProductList
          products={slicedProducts}
          badgeColor={THEME_VARIABLES['@primary-color']}
        />
      </div>
      <div className="description">
        <h1 className="price">$ {price}</h1>
        {/*
        TODO: fix on mobile
         */}
        <Divider type="vertical" />
        <h1 className="state">{state.msg}</h1>
      </div>
      <div className="info">
        <Button shape="circle" icon="info" size="large" onClick={handleClick} />
      </div>
    </StyledCard>
  );
};

export default OrderCard;
