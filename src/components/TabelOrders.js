import TabelOrdersRow from './TableOrdersRow';

export default function TabelOrders({ orders, deleteOrder, showPopapEditOrder, changeEditValue, showPopapShowOrder }) {
  if (!orders.length) {
    return (
      <p className="p-4 text-center">К сожалению пусто</p>
    );
  }

  return (
    <table className="table-order table table-hover">
      <thead>
        <tr>
          <th>Номер заявки</th>
          <th>Дата и время получения заявки от клиента</th>
          <th>Название фирмы клиента</th>
          <th>ФИО перевозчика</th>
          <th>Контактный телефон перевозчика</th>
          <th>Комментарии</th>
          <th colSpan="2">ATI</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map(order => {
            return (
              <TabelOrdersRow
                order={ order }
                deleteOrder={ deleteOrder }
                showPopapEditOrder={ showPopapEditOrder }
                changeEditValue={ changeEditValue }
                showPopapShowOrder={ showPopapShowOrder }
                key={ order.id } />
            );
          })
        }
      </tbody>
    </table>
  );
}
