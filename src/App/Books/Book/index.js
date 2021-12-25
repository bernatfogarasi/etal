import Page from "components/Page";
import {
  bookTitle,
  sectionTitle,
  studyAuthor,
  subsectionTitle,
} from "functions/parse";
import styled from "styled-components";

// import study from `data/books/${folderName}/${sectionFolderName}/${subsectionFolderName}/${studyFileName}.js`.replaceAll(
//                                   /(\s)/g,
//                                   "\\ "
//                                 )

// const folderName = "2013 Gazdasági teológia";
// const study =
//   require(`data/books/${folderName}/1 Esszék, tanulmányok/1 B. Franklin - W. Benjamin - M. Weber/1 Benjamin Franklin`).default;
// console.log(study.title);

const Wrapper = styled(Page)``;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid; */
`;

const SectionTitle = styled.div`
  font-size: 20px;
`;

const SectionContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Subsection = styled.div`
  /* border: 1px solid; */
`;

const SubsectionTitle = styled.div`
  font-size: 20px;
`;

const SubsectionContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Study = styled.div`
  display: flex;
  gap: 50px;
  margin: auto;
  text-align: justify;
`;

const StudyAuthor = styled.div`
  opacity: 0.8;
`;

const StudyTitle = styled.div``;

const Book = ({ className, folderName, contents }) => {
  return (
    <Wrapper className={className} title={bookTitle(folderName)}>
      <Contents>
        {Object.entries(contents).map(
          ([sectionFolderName, sectionContents]) => (
            <Section key={sectionFolderName}>
              {/* <SectionTitle>{sectionTitle(sectionFolderName)}</SectionTitle> */}
              <SectionContents>
                {Object.entries(sectionContents).map(
                  ([subsectionFolderName, subsectionContents]) =>
                    typeof subsectionContents === "object" ? (
                      <Subsection key={subsectionFolderName}>
                        {/* <SubsectionTitle>
                          {subsectionTitle(subsectionFolderName)}
                        </SubsectionTitle> */}
                        <SubsectionContents>
                          {subsectionContents.map((studyFileName) => (
                            <Study key={studyFileName}>
                              {/* <StudyAuthor>
                                {studyAuthor(studyFileName)}
                              </StudyAuthor> */}
                              <StudyTitle>
                                {
                                  require(`data/books/${folderName}/${sectionFolderName}/${subsectionFolderName}/${studyFileName}`)
                                    .default.html
                                }
                              </StudyTitle>
                            </Study>
                          ))}
                        </SubsectionContents>
                      </Subsection>
                    ) : null
                )}
              </SectionContents>
            </Section>
          )
        )}
      </Contents>
    </Wrapper>
  );
};

export default Book;
