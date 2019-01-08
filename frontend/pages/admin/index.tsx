import { Component } from 'react';
import { message } from 'antd';
import AdminLayout from '../../components/AdminLayout';
import withAuth from '../../components/withAuth';
import { EntityContext } from '../../context';
import EntityCard from '../../components/EntityCard';
import styled from 'styled-components';
import EntityCardContainer from '../../components/EntityCardContainer';
import Spinner from '../../components/Spinner';

interface State {
  loading: boolean;
}

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;

  .col {
    flex: 1;
    max-width: 49%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .col {
      max-width: 100%;
      margin-top: 3%;
    }

    flex-direction: column;
  }
`;
class Index extends Component<any, State> {
  static contextType = EntityContext;
  context!: React.ContextType<typeof EntityContext>;

  state = {
    loading: true
  };

  async componentDidMount() {
    try {
      await this.context.actions.update();
    } catch (err) {
      message.error(`${err}`);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <AdminLayout selectedKey="home">
        <FlexContainer>
          <div className="col">
            <EntityCardContainer
              title={`Categories (${this.context.entities.categories.length})`}
              entityType="category"
            >
              {this.context.entities.categories &&
                this.context.entities.categories.map(category => (
                  <EntityCard
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    image={category.image}
                  />
                ))}
            </EntityCardContainer>
          </div>
          <div className="col">
            <EntityCardContainer
              title={`Products (${this.context.entities.products.length})`}
              entityType="product"
            >
              {this.context.entities.products.map(product => (
                <EntityCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </EntityCardContainer>
          </div>
        </FlexContainer>
      </AdminLayout>
    );
  }
}

export default withAuth(Index);
