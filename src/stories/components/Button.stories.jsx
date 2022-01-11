import styled from '@emotion/styled';
import { Button, TextAnchorButton, Icon, Avatar } from '@components/base';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return (
    <Container>
      <Button>Test</Button>
      <Button>
        <Icon name="mi:menu" color="#000" height="18" />
      </Button>
      <Button>
        <Icon name="mi:search" color="#000" height="18" />
      </Button>
      <Button>
        <Icon name="mi:notification" color="#000" height="18" />
      </Button>
      <Button>
        <Avatar src="default" />
      </Button>
      <TextAnchorButton border={true} src="#">
        Test
      </TextAnchorButton>
      <TextAnchorButton border={false} src="#">
        Test
      </TextAnchorButton>
    </Container>
  );
};
