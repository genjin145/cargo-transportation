import { useState } from "react";

export default function EditOrder({ order = {}, editOrder, hidePopapEditOrder }) {
  const [valid, setValid] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;

    if (form.checkValidity()) {
      editOrder(order.id, {
        id: form.id.value,
        transportationDate: form.date.value,
        companyName: form.company.value,
        fullNameCarrier: form.name.value,
        phoneCarrier: form.phone.value,
        comments: form.comments.value,
        ati: form.ati.value
      });
      hidePopapEditOrder();
    }

    setValid(true);
  }

  return (
    <div className="popap">
      <div
        className="popap__overlay"
        onClick={ () => { hidePopapEditOrder() } }
      ></div>

      <div className="popap__box">
        <h2 className="mb-5">Редактировать заявку</h2>

        <form
          className={ (valid) ? 'was-validated' : ''}
          noValidate
          onSubmit={ handleSubmit }
        >
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="order-id">Номер заявки</label>
                <input className="form-control" id="order-id" name="id" type="number" required defaultValue={ order.id } />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="order-ati">ATI</label>
                <input className="form-control" id="order-ati" name="ati" type="number" required defaultValue={ order.ati } />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="order-date">Дата и время получения заявки от клиента</label>
            <input className="form-control" id="order-date" name="date" type="text" required defaultValue={ order.transportationDate } />
          </div>
          <div className="form-group">
            <label htmlFor="order-company">Название фирмы клиента</label>
            <input className="form-control" id="order-company" name="company" type="text" required defaultValue={ order.companyName } />
          </div>
          <div className="form-group">
            <label htmlFor="order-name">ФИО перевозчика</label>
            <input className="form-control" id="order-name" name="name" type="text" required defaultValue={ order.fullNameCarrier } />
          </div>
          <div className="form-group">
            <label htmlFor="order-phone">Контактный телефон перевозчика</label>
            <input className="form-control" id="order-phone" name="phone" type="text" required defaultValue={ order.phoneCarrier } />
          </div>
          <div className="form-group">
            <label htmlFor="order-comments">Комментарии</label>
            <textarea className="form-control" id="order-comments" name="comments" rows="4" type="text" defaultValue={ order.comments } />
          </div>

          <button type="submit" className="btn btn-success">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
