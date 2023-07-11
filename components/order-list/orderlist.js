import { orderList } from "../data/order-list_data.js";

let orderListHTML = "";

for (let i = 0; i < orderList.length; i++) {
  let status = orderList[i].status;

  if (status === "Pending") {
    status = `<span class="badge text-bg-danger px-2 py-1 text-light">Pending</span>`;
  } else if (status === "Delivered") {
    status = `<span class="badge text-bg-success px-2 py-1 text-light">Delivered</span>`;
  } else if (status === "Cancelled") {
    status = `<span class="badge text-bg-dark px-2 py-1 text-light">Cancelled</span>`;
  }

  orderListHTML += `
    <tr>
      <td class="text-secondary">${orderList[i].id}</th>
      <td class="text-secondary">${orderList[i].orderName}</td>
      <td class="text-secondary">${orderList[i].customerName}</td>
      <td class="text-secondary">${orderList[i].location}</td>
      <td class="text-secondary">${orderList[i].deliveryTime}</td>
      <td class="text-secondary">${orderList[i].quantity}</td>
      <td class="text-secondary">$${orderList[i].price}</td>
      <td class="text-secondary">${status}</td>
      <td class="text-secondary">
        <i class="fa fa-pencil color-muted"></i>
        <i class="fa fa-close color-danger"></i>
      </td>
    </tr>
  `;
}

document.querySelector("tbody").innerHTML = orderListHTML;
