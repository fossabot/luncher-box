import { Badge } from 'antd';

interface Props {
  count?: React.ReactNode;
  dot?: boolean;
  offset?: [number, number];
  overflowCount?: number;
  showZero?: boolean;
  text?: string;
  title?: string;
  style?: React.CSSProperties;
}

const PriceBadge = (props: Props) => {
  return (
    <Badge
      style={{
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.65)',
        boxShadow: '0 0 0 1px #d9d9d9 inset',
        ...props.style
      }}
      {...props}
    />
  );
};

export default PriceBadge;
