import styled from "styled-components";
import Category from "./Category";
import Link from "./Link";
import facebook from "assets/facebook.png";
import twitter from "assets/twitter.png";
import linkedin from "assets/linkedin.png";

const Wrapper = styled.div`
  background: #12212f;
  color: white;
  position: sticky;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: space-between;
  max-width: 1000px;
  width: 90vw;
  margin: auto;
  gap: 30px;
  padding: 40px;
`;

const Social = styled(Link)`
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.img``;

const Email = styled(Link)``;

const Footer = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Categories>
        <Category title="ET AL.">
          2010 tavaszától Et al. néven transzdiszciplináris kritikai elmélet
          előadássorozat indult a Szegedi Tudományegyetemen vendégoktatók
          közreműködésével, az Összehasonlító Irodalomtudományi Tanszék
          szervezésében. A helyi, belföldi és külföldi szakemberekre építő
          sorozat félévente más és más témában, 4-5 előadással jelentkezik.
          Ennek testvéreként indítottuk útjára 2013 szeptemberében az Et al. —
          Kritikai Elmélet Online kötetsorozatot. Tovább...
        </Category>
        <Category title="KÖZÖSSÉG">
          <Social href="http://www.facebook.com/complit.szeged">
            <SocialIcon src={facebook} />
            Facebook
          </Social>
          <Social href="https://twitter.com/et_al_online">
            <SocialIcon src={twitter} />
            Twitter
          </Social>
          <Social href="http://hu.linkedin.com/in/etalonline">
            <SocialIcon src={linkedin} />
            LinkedIn
          </Social>
        </Category>
        <Category title="KAPCSOLAT">
          <Email
            href="mailto:fogarasi@hung.u-szeged.hu"
            target="_blank"
            rel="noopener noreferrer"
          >
            fogarasi@hung.u-szeged.hu
          </Email>
          <Link href="https://www.complit.u-szeged.hu/">
            Szegedi Tudományegyetem Összehasonlító Irodalomtudományi Tanszék
          </Link>
          <Link href="https://goo.gl/maps/3cfrV8FoPmVft2b28">
            6722 Szeged, Egyetem u. 2-6.
          </Link>
          <Link href="tel:+36-62-544-828">Tel.: +36-62-544-828</Link>
        </Category>
      </Categories>
    </Wrapper>
  );
};

export default Footer;
