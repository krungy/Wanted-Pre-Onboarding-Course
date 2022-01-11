import styled from '@emotion/styled';
import { Button, TextAnchorButton, Icon, Avatar } from '@components/base';
import color from '@assets/colors';

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
      <TextAnchorButton border={true} src="#" color={color.black_50}>
        Test
      </TextAnchorButton>
      <TextAnchorButton border={false} src="#" color={color.black}>
        Test
      </TextAnchorButton>
      <TextAnchorButton border={false} color={color.blue} src="#">
        바로가기 <Icon name="bi:chevron-right" color={color.blue} height="18" />
      </TextAnchorButton>
    </Container>
  );
};
