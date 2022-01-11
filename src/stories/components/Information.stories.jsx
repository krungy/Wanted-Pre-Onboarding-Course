import { Information } from '@components/base';

export default {
  title: 'Components/Information',
  component: Information,
};

export const Default = () => {
  return (
    <Information
      title="타이틀"
      subtitle="부제목"
      style={{ border: '1px solid' }}
    />
  );
};
