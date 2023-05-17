import { HomeHeader } from '../../components/HomeHeader';
import { CarStatus } from '../../components/CarStatus';

import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus licensePlate="XXX-1234" />
      </Content>
    </Container>
  );
}