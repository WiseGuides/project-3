const programAuthors = 
  {
    eich: {
    id: 'eich',
    name: "Brendan Eich",
    language: "JavaScript",
    image: "eich.jpg",
    dateOfBirth: "4 July 1961"
  },
  gosling: {
    id: 'gosling',
    name: "James Gosling",
    language: "Java",
    image: "gosling.jpg",
    dateOfBirth: "19 May 1955"
  },
  hejlsberg: {
    id: 'hejlsberg',
    name: "Anders Hejlsberg",
    language: "C#",
    image: "hejlsberg.jpg",
    dateOfBirth: "2 December 1960"
  }
};


function details(id) {
  let selectedProgramAuthor = programAuthors[id];
  document.querySelector('.about h2').innerText = selectedProgramAuthor.name;
  document.querySelector('.dob .info').innerText = selectedProgramAuthor.dateOfBirth;
  document.querySelector('.language .info').innerText = selectedProgramAuthor.language;
  document.querySelector('img').src = './images/' + selectedProgramAuthor.image;
}