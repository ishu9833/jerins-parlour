import React from "react";

const OrderDetail = ({ order }) => {
  const { title, name, status, email, payWith } = order;
  return (
    <>
      <table>
        <tbody>
          <td>{name}</td>
          <td>{email}</td>
          <td>{title}</td>
          <td>{payWith}</td>
          <td>{status}</td>
        </tbody>
      </table>
    </>
  );
};

export default OrderDetail;
