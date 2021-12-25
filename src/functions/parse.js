export const bookTitle = (bookFolderName) =>
  bookFolderName.substring(
    bookFolderName.indexOf(" ") + 1,
    bookFolderName.length
  );

export const bookYear = (bookFolderName) =>
  bookFolderName.substring(0, bookFolderName.indexOf(" "));

export const bookSubfolder = (bookFolderName) =>
  `${bookTitle(bookFolderName)
    .replaceAll(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
    .replaceAll(" ", "-")
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ö", "o")
    .replaceAll("ő", "o")
    .replaceAll("ú", "u")
    .replaceAll("ü", "u")
    .replaceAll("ű", "u")
    .toLowerCase()}-${bookYear(bookFolderName)}`;

export const sectionTitle = (sectionFolderName) =>
  sectionFolderName
    .substring(sectionFolderName.indexOf(" ") + 1, sectionFolderName.length)
    .toUpperCase();

export const subsectionTitle = (subsectionFolderName) =>
  subsectionFolderName.substring(
    subsectionFolderName.indexOf(" ") + 1,
    subsectionFolderName.length
  );

export const studyAuthor = (studyFileName) =>
  studyFileName.substring(studyFileName.indexOf(" ") + 1, studyFileName.length);
