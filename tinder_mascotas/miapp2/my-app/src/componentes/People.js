
const url = "http://localhost:3001/api/usuarios";
const person = [];
 
async function fetchJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  fetchJSON().then(json => {
    for (let i = 0; i < json.data.length; i++) {
      person.push(json.data[i]);
    }
     
});
 
 
 
export const People = person;