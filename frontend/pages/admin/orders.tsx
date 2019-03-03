import { Empty } from 'antd';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import OrderContainer from '../../components/OrderContainer';
import Spinner from '../../components/Spinner';
import withAuth from '../../components/withAuth';
import { AdminContext } from '../../context';
import { Order } from '../../interfaces';

const FlexContainer = styled.div`
  background-color: #fafafa;
  padding: 2rem;
  border-radius: 7px;
  box-shadow: 0 20px 24px -18px rgba(0, 0, 0, 0.31);
`;

const useOrders = (initialOrders: Order[]): [Order[], boolean] => {
  const [orders, setOrders] = useState(initialOrders);
  const [loading, setLoading] = useState(true);
  const context = useContext(AdminContext);

  useEffect(() => {
    if (context.socket) {
      context.socket.on('fetched_orders', handleOrders);
      context.socket.on('placed_order', handleOrders);
      context.socket.on('accepted_order_admin', setAcceptedOrder);
      context.socket.on('declined_order_admin', setDeclindedOrder);
      context.socket.on('finished_order_admin', setFinishedOrder);
    }

    return () => {
      if (context.socket) {
        context.socket.off('fetched_orders', handleOrders);
        context.socket.off('placed_order', handleOrders);
        context.socket.off('accepted_order_admin', setAcceptedOrder);
        context.socket.off('declined_order_admin', setDeclindedOrder);
        context.socket.off('finished_order_admin', setFinishedOrder);
      }
    };
  }, [context.socket]);

  useEffect(() => {
    if (context.socket) {
      context.socket.emit('fetch_orders');
    }
  }, []);

  const setAcceptedOrder = ({ id }: any) => {
    setOrders(prevOrders => {
      const editedOrders = prevOrders.map(order => {
        if (order.id === id) {
          return {
            ...order,
            state: 1
          };
        }
        return order;
      });
      return editedOrders;
    });
  };

  const setDeclindedOrder = ({ id }: any) => {
    setOrders(prevOrders => {
      const editedOrders = prevOrders.filter(order => {
        return order.id !== id;
      });
      return editedOrders;
    });
  };

  const setFinishedOrder = ({ id }: any) => {
    setOrders(prevOrders => {
      const editedOrders = prevOrders.map(order => {
        if (order.id === id) {
          return {
            ...order,
            state: 2
          };
        }
        return order;
      });
      return editedOrders;
    });
  };

  const handleOrders = (incomingOrders: Order[]) => {
    setOrders(incomingOrders);
    setLoading(false);
  };

  return [orders, loading];
};

const Orders: React.FunctionComponent<any> = () => {
  const [orders, loading] = useOrders([]);

  let data: React.ReactNode | React.ReactNode[];
  if (loading) {
    data = <Spinner />;
  } else {
    if (orders.length) {
      data = <OrderContainer orders={orders} />;
    } else {
      data = <Empty description="No orders placed yet!" />;
    }
  }

  return <FlexContainer>{data}</FlexContainer>;
};

export default withAuth(Orders);
