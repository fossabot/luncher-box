import { Empty, PageHeader } from 'antd';
import Head from 'next/head';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Order from '../../components/OrderCard';
import { CustomerContext } from '../../context';

const StyledPageHeader = styled(PageHeader)`
  background-color: #fafafa;
  border-radius: 7px;
  flex: 1;

  @media (max-width: 480px) {
    border-radius: 0;
    margin: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 7px;
  box-shadow: 0 20px 24px -18px rgba(0, 0, 0, 0.31);

  margin-right: 10%;
  margin-left: 10%;

  @media (max-width: 480px) {
    border-radius: 0;
    margin: 0;
  }
`;

export default () => {
  const { orderHistory } = useContext(CustomerContext);
  let data: React.ReactNode[] | React.ReactNode;

  if (orderHistory.length) {
    data = orderHistory.map(order => {
      return <Order order={order} key={`${order.id}`} />;
    });
  } else {
    data = (
      <Empty description="No orders">
        No orders placed yet. Go and place some!
      </Empty>
    );
  }

  return (
    <>
      <Head>
        <title>Orders • LuncherBox</title>
      </Head>
      <FlexContainer>
        <StyledPageHeader
          title={
            <h1>
              <strong>My orders</strong>
            </h1>
          }
          subTitle={
            <h3>
              <strong>({orderHistory.length})</strong>
            </h3>
          }
        >
          {data}
        </StyledPageHeader>
      </FlexContainer>
    </>
  );
};
