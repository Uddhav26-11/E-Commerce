import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ManagerDashboard = () => {
  const {
    orders,
    products,
    deleteOrder,
  } = useContext(ShopContext);

  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.amount || 0),
    0
  );

  const paidOrders = orders.filter(
    (order) =>
      order.payment === true ||
      order.paymentStatus === "Paid"
  ).length;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Manager Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-5">

        <div className="border p-5 rounded-lg shadow">
          <h2 className="font-semibold">
            Total Orders
          </h2>
          <p className="text-3xl">
            {orders.length}
          </p>
        </div>

        <div className="border p-5 rounded-lg shadow">
          <h2 className="font-semibold">
            Revenue
          </h2>
          <p className="text-3xl">
            ₹{totalRevenue}
          </p>
        </div>

        <div className="border p-5 rounded-lg shadow">
          <h2 className="font-semibold">
            Products
          </h2>
          <p className="text-3xl">
            {products.length}
          </p>
        </div>

        <div className="border p-5 rounded-lg shadow">
          <h2 className="font-semibold">
            Paid Orders
          </h2>
          <p className="text-3xl">
            {paidOrders}
          </p>
        </div>

      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        All Orders
      </h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="border p-5 rounded-lg mb-4 shadow"
          >
            <p>
              <strong>Order ID:</strong>{" "}
              {order._id}
            </p>

            <p>
              <strong>Amount:</strong> ₹
              {order.amount}
            </p>

            <p>
              <strong>Payment:</strong>{" "}
              {order.paymentStatus ||
                (order.payment
                  ? "Paid"
                  : "Pending")}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {order.status}
            </p>

            <p>
              <strong>Customer:</strong>{" "}
              {order.customer?.name}
            </p>

            <p>
              <strong>City:</strong>{" "}
              {order.address?.city}
            </p>

            {order.items?.length > 0 && (
              <div className="mt-2">
                <strong>Items:</strong>

                {order.items.map(
                  (item, index) => (
                    <p key={index}>
                      {item.name} x{" "}
                      {item.quantity}
                    </p>
                  )
                )}
              </div>
            )}

            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Delete this order?"
                  )
                ) {
                  deleteOrder(order._id);
                }
              }}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Delete Order
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ManagerDashboard;