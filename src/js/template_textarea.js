export function templateTextArea(data) {
  return `<label for="${data.id}">${data.label}</label>
        <textarea id="${data.id}"></textarea>`
   ;
}