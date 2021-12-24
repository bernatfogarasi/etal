import styled from "styled-components";
import Page from "components/Page";

const Wrapper = styled(Page)``;

const Rolunk = ({ className }) => {
  return (
    <Wrapper className={className} title="Rólunk">
      <p>
        <b>'et al.'</b> = <b>'és mások'</b>, rövidítés, latin et alii (hn.), et
        aliae (nn.), et alia (sn.)
      </p>
      <p>
        2010 tavaszától et al. néven transzdiszciplináris kritikai elmélet
        előadássorozat indult a Szegedi Tudományegyetemen vendégoktatók
        közreműködésével, az Összehasonlító Irodalomtudományi Tanszék
        szervezésében. A helyi, belföldi és külföldi szakemberekre építő sorozat
        félévente más és más témában, 4-5 előadással jelentkezik.
      </p>
      <p>
        Ennek testvéreként indítottuk útjára 2013 szeptemberében az et al. —
        kritikai elmélet online kötetsorozatot.
      </p>
      <p>
        Sorozatunk évente 1-2 kötettel jelentkező, rendszertelenül frissülő,
        ingyenesen elérhető elektronikus időszaki kiadvány, mely a Szegedi
        Tudományegyetem Összehasonlító Irodalomtudományi Tanszékén működő
        doktoranduszműhely gondozásában készül, más kutatóműhelyek
        közreműködésével. A sorozat arculatának formálásában jelentős szerepet
        szánunk a vendégszerkesztők és teamjeik közreműködésének. Ezzel
        összhangban a sorozatot projektszerű együttműködésben létrejött
        tematikus kötetek alkotják. Hazai szerzésű és idegenből fordított
        tanulmányokat (esetenként esszéket), valamint kapcsolódó recenziókat
        közlünk. Az egyes kötetek a transzdiszciplinárisan felfogott kritikai
        elmélet valamely problémáját járják körül, s ezzel olyan kérdések beható
        tanulmányozására tesznek kísérletet, amelyek többféle tudományág
        találkozási pontján helyezkednek el, az irodalom- és nyelvelmélettől a
        művészet- és médiumelméleteken át a technika, a gazdaság vagy a
        történelem általánosabb kritikai igényű vizsgálatáig. A közreműködők
        elkötelezettek a komparatív kutatások mellett, mind történeti, mind
        nyelvi, mind kulturális vonatkozásban.
      </p>
      <p>
        Minderről más megfogalmazásban a sorozatszerkesztő Beköszöntőjében
        olvashat.
      </p>
    </Wrapper>
  );
};

export default Rolunk;
