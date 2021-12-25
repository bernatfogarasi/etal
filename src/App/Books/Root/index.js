import styled from "styled-components";
import kotetek from "data/books";
import Book from "./Book";
import Page from "components/Page";
import { bookTitle, bookSubfolder, bookYear } from "functions/parse";

let books = {};

Object.entries(kotetek).map(([bookFolderName, bookContents]) => {
  books[bookFolderName] = {};
  Object.entries(bookContents).map(([sectionFolderName, sectionContents]) => {
    books[bookFolderName][sectionFolderName] = {};
    Object.entries(sectionContents).map(
      ([subsectionFolderName, subsectionContents]) => {
        if (typeof subsectionContents === "object") {
          books[bookFolderName][sectionFolderName][subsectionFolderName] = [];
          subsectionContents.map((studyFileName) => {
            books[bookFolderName][sectionFolderName][subsectionFolderName].push(
              studyFileName
            );
          });
        }
      }
    );
  });
});

console.log(books);

const Wrapper = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Books = ({ className }) => {
  return (
    <Wrapper className={className} title="Kötetek">
      {Object.entries(books).map(([bookFolderName, bookContents]) => {
        const year = bookYear(bookFolderName);
        const title = bookTitle(bookFolderName);
        const subfolder = bookSubfolder(bookFolderName);

        return (
          <Book
            key={bookFolderName}
            year={year}
            title={title}
            to={subfolder}
          ></Book>
        );
      })}
    </Wrapper>
  );
};

export default Books;
