import Link from 'next/link';
import styled from 'styled-components';

const StyledDiv: any = styled.div`
  overflow: hidden;
  display: flex;
  white-space: normal;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  position: relative;
  color: white;
  border-radius: 7px;
  font-size: 3rem;
  margin: 0.5rem;
  width: 16rem;
  height: 16rem;
  user-select: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 12px 0 0 0;
    flex-basis: 100%;
  }

  .title {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 500;
    transition: all 0.25s;
  }

  @media (min-width: 768px) {
    &:hover {
      .blurred-div {
        transform: scale(1.1);
        filter: blur(2px);
      }
    }
  }

  box-shadow: 0 20px 24px -18px rgba(0, 0, 0, 0.31);
`;

const BlurredDiv: any = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  transition: all 0.3s;
  height: 100%;
  background: url(${(props: any) => props.img}) no-repeat center;
  background-size: cover;
  overflow: hidden;
`;

interface Props {
  id: number;
  name: string;
  image: string;
}

export default (props: Props) => {
  const { id, name, image } = props;

  return (
    <Link href={`/app/category?categoryId=${id}`} as={`/app/category/${id}`}>
      <StyledDiv>
        <BlurredDiv className="blurred-div" img={image}>
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.15)',
              width: '100%',
              height: '100%'
            }}
          />
        </BlurredDiv>
        <div className="title">{name}</div>
      </StyledDiv>
    </Link>
  );
};
