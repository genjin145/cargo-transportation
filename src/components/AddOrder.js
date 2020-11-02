import { useState } from "react";

export default function AddOrder({ addOrder, hidePopapAddOrder }) {
  const [valid, setValid] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;

    if (form.checkValidity()) {
      addOrder({
        id: form.id.value,
        transportationDate: form.date.value,
        companyName: form.company.value,
        fullNameCarrier: form.name.value,
        phoneCarrier: form.phone.value,
        comments: form.comments.value,
        ati: form.ati.value
      });
      hidePopapAddOrder();
    }

    setValid(true);
  }

  return (
    <div className="popap">
      <div
        className="popap__overlay"
        onClick={ () => { hidePopapAddOrder() } }
      ></div>

      <div className="popap__box">
        <h2 className="mb-5">Создать заявку</h2>

        <form
          className={ (valid) ? 'was-validated' : ''}
          noValidate
          onSubmit={ handleSubmit }
        >
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="order-id">Номер заявки</label>
                <input className="form-control" id="order-id" name="id" type="number" required />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="order-ati">ATI</label>
                <input className="form-control" id="order-ati" name="ati" type="number" required />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="order-date">Дата и время получения заявки от клиента</label>
            <input className="form-control" id="order-date" name="date" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="order-company">Название фирмы клиента</label>
            <input className="form-control" id="order-company" name="company" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="order-name">ФИО перевозчика</label>
            <input className="form-control" id="order-name" name="name" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="order-phone">Контактный телефон перевозчика</label>
            <input className="form-control" id="order-phone" name="phone" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="order-comments">Комментарии</label>
            <textarea className="form-control" id="order-comments" name="comments" rows="4" type="text" />
          </div>

          <button type="submit" className="btn btn-primary">Создать</button>
        </form>
      </div>
    </div>
  );
}
