let id=11;
const url = "http://localhost:3001/api/futuroslikes/"+id;
const personas = [];
 
async function fetchJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  fetchJSON().then(json => {
    for (let i = 0; i < json.data.length; i++) {
      personas.push(json.data[i]);
    }
     
});
 
 
 
export const Tarjetas = personas;