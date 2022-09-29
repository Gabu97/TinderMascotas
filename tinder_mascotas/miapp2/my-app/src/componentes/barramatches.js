let id=11;
const url = "http://localhost:3001/api/matches/"+id;
const persona = [];

async function fetchJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  fetchJSON().then(json => {
    for (let i = 0; i < json.data.length; i++) {
      persona.push(json.data[i]);
    }
     
});
 
 
 
export const Barramatch = persona;