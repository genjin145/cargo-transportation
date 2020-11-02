export default function ShowOrder({ order, hidePopapShowOrder }) {
  return (
    <div className="popap">
      <div
        className="popap__overlay"
        onClick={ () => { hidePopapShowOrder() } }
      ></div>

      <div className="popap__box">
        <h2 className="mb-5">Заявка № { order.id }</h2>

        <b>Дата и время получения заявки от клиента</b>
        <p>{ order.transportationDate }</p>

        <b>Название фирмы клиента</b>
        <p>{ order.companyName }</p>

        <b>ФИО перевозчика</b>
        <p>{ order.fullNameCarrier }</p>

        <b>Контактный телефон перевозчика</b>
        <p>{ order.phoneCarrier }</p>

        <b>ATI</b>
        <p>
          <a href={`https://ati.su/firms/${order.ati}/info`} target="_blanck">{ order.ati }</a>
        </p>

        <b>Комментарии</b>
        <p>{ order.comments ? order.comments : '-' }</p>
      </div>
    </div>
  );
}
