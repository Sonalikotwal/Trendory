function loadOrders() {
  fetch("http://localhost:5000/api/orders")
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("ordersTable");
      table.innerHTML = "";

      data.forEach(order => {
        table.innerHTML += `
          <tr>
            <td>${order.id}</td>
            <td>${order.name}</td>
            <td>${order.product}</td>
            <td>${order.price}</td>
            <td>${order.status}</td>
            <td>
              <button onclick="updateStatus('${order.id}','Shipped')">Ship</button>
              <button onclick="updateStatus('${order.id}','Delivered')">Deliver</button>
              <button onclick="deleteOrder('${order.id}')">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

// UPDATE STATUS
function updateStatus(id, status) {
  fetch(`http://localhost:5000/api/order/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  })
  .then(() => loadOrders());
}

// DELETE ORDER
function deleteOrder(id) {
  fetch(`http://localhost:5000/api/order/${id}`, {
    method: "DELETE"
  })
  .then(() => loadOrders());
}

loadOrders();