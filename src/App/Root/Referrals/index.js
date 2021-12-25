import styled from "styled-components";
import Referral from "./Referral";
import about from "assets/about.png";
import current from "assets/current.jpg";
import archive from "assets/archive.jpg";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 50px;
`;

const Referrals = ({ className }) => {
  return (
    <Wrapper className={className}>
      {" "}
      <Referral
        to="rolunk"
        title="Rólunk"
        description="A belföldi és nemzetközi együttműködésen alapuló sorozatot a Szegedi Tudományegyetem Összehasonlító Irodalomtudományi Tanszéke adja ki."
        image={about}
      />
      <Referral
        to="friss"
        title="Legfrissebb kötet"
        description="Újabb tematikus válogatásunk a harcművészet-kutatás bontakozó kutatási területének nemzetközi és hazai képviselőit vonultatja fel..."
        image={current}
      />
      <Referral
        to="kotetek"
        title="Archívum"
        description="A kritikai elmélkedés szakadatlanul folyik, böngéssze bátran egyre bővülő archívumunkat; kereshet cikkre, szerzőre, vagy témára is!"
        image={archive}
      />
    </Wrapper>
  );
};

export default Referrals;
