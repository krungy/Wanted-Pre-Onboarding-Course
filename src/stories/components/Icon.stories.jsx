import { Icon } from '@components/base';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = () => {
  return (
    <>
      <Icon name="mi:notification" color="#000" height="18px" />
      <Icon name="mi:search" color="#000" height="18px" />
      <Icon name="mi:menu" color="#000" height="18px" />
    </>
  );
};
