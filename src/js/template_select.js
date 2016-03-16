export function templateSelect(data) {

  var langs = data.options;

  var langsHtml = langs.map(function(option) {
      `<option value="${data.value}">${data.label}</option>`
    });

    langsHtml = langsHtml.join('');

        
    return `<label for="${data.id}">${data.label}</label>
            <select id="${data.id}">
              <option value="${data.value}">${data.label}</option>
            </select>
            `;
    }


export function manager(user) {
  
  var subs = user.subordinates;

  var subsHtml = subs.map(function(sub) {
    return `<li>${sub}</li>`;
  });

  subsHtml = subsHtml.join('');

  return `
    <div class="user manager">
      <div class="first-name">${user.firstName}</div>
      <div class="last-name">${user.lastName}</div>
      <div class="employee-id">${user.employeeId}</div>
      <div class="role">${user.role}</div>
      <ul class="subordinates">
        ${subsHtml}
      </ul>
    </div>
  `;
}
