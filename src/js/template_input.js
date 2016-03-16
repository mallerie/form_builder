export function templateInput(data) {
  return `
   <label for="${data.id}">${data.label}</label>
   <input type="${data.type}" id="${data.id}">`
   ;
}
