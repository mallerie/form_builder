export function templateSelect(data) {

  var items = data.options;

  var itemsHtml = items.map(function(item) {
      return `<option value="${item.value}">${item.label}</option>`
    });

    itemsHtml = itemsHtml.join('');

        
    return `<label for="${data.id}">${data.label}</label>
            <select id="${data.id}">
              <option value=""></option>
              ${itemsHtml}
            </select>
            `;
    }


// export function manager(user) {
  
//   var subs = user.subordinates;

//   var subsHtml = subs.map(function(sub) {
//     return `<li>${sub}</li>`;
//   });

//   subsHtml = subsHtml.join('');

//   return `
//     <div class="user manager">
//       <div class="first-name">${user.firstName}</div>
//       <div class="last-name">${user.lastName}</div>
//       <div class="employee-id">${user.employeeId}</div>
//       <div class="role">${user.role}</div>
//       <ul class="subordinates">
//         ${subsHtml}
//       </ul>
//     </div>
//   `;
// }
