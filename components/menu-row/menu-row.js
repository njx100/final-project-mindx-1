import { menu } from "./menu_data.js";

let menuRowHTML = "";

for (let i = 0; i < menu.length; i++) {
  menuRowHTML += `
    <div class="card col-12 col-md-6 col-xl-3 d-block">
      <div class="card-image">
        <img src="${menu[i].image}" class="card-img-top" alt="error">
      </div>
      <div class="card-body">
        <div class="card-description">

          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">${menu[i].name}</h5>
            <h4>
              <span class="badge badge-primary">$${menu[i].price}</span>
            </h4>
          </div>

          <div class="d-flex justify-content-between align-items-center mt-2">
            <p class="mb-0">
              <span>Ordered: </span>
              <strong>${menu[i].totalOrderedQuantity}</strong>
            </p>
            <p class="mb-0">
              <span>Revenue: </span>
              <strong>$${menu[i].totalRevenue}</strong>
            </p>
          </div>

        </div>
      </div>
  </div>
    `;
}

document.querySelector(".menu-row").innerHTML = menuRowHTML;
