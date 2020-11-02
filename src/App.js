import React, { useEffect, useState, useRef } from 'react';

import TabelOrders from './components/TabelOrders';
import AddOrder from './components/AddOrder';
import EditOrder from './components/EditOrder';
import ShowOrder from './components/ShowOrder';

function App() {
  const data = useRef([]);
  const [orders, setOrders] = useState(data.current);
  const [search, setSearch] = useState('');
  const [isOpenAddOrder, setIsOpenAddOrder] = useState(false);
  const [isOpenEditOrder, setIsOpenEditOrder] = useState(false);
  const [isOpenShowOrder, setIsOpenShowOrder] = useState(false);
  const [editValue, setEditValue] = useState({});

  useEffect(() => {
    getJsonData();

    async function getJsonData() {
      const response = await fetch('./data.json');
      const json = await response.json();

      data.current = json;
      setOrders(json);
    }
  }, []);

  useEffect(() => {
    if (search) {
      setOrders(data.current.filter((order) => {
        const str = Object.values(order).join(' ');

        return str.includes(search.trim());
      }));
    } else {
      setOrders(data.current);
    }
  }, [search]);

  function addOrder(order) {
    data.current = data.current.concat(order);
    setOrders(data.current);
  }

  function editOrder(id, newOrder) {
    data.current = data.current.map((item) => {
      if (item.id === id) {
        return newOrder;
      }

      return item;
    });

    setOrders(data.current);
  }

  function deleteOrder(id) {
    data.current = data.current.filter((order) => order.id !== id);
    setOrders(data.current);
    setSearch('');
  }

  function changeEditValue(value) {
    setEditValue(value);
  }

  function showPopapAddOrder() {
    setIsOpenAddOrder(true);
  }

  function hidePopapAddOrder() {
    setIsOpenAddOrder(false);
  }

  function showPopapEditOrder() {
    setIsOpenEditOrder(true);
  }

  function hidePopapEditOrder() {
    setIsOpenEditOrder(false);
  }

  function showPopapShowOrder() {
    setIsOpenShowOrder(true);
  }

  function hidePopapShowOrder() {
    setIsOpenShowOrder(false);
  }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light mb-4 bg-light">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Найти заявку"
              value={ search }
              onChange={ (evt) => { setSearch(evt.target.value) } }
            />
          </form>

          <button
            className="btn btn-outline-success my-2 my-sm-0 ml-auto"
            type="submit"
            onClick={ showPopapAddOrder }
          >Создать новую заявку</button>
        </nav>

        <TabelOrders
          orders={ orders }
          deleteOrder={ deleteOrder }
          showPopapEditOrder={ showPopapEditOrder }
          changeEditValue = { changeEditValue }
          showPopapShowOrder={ showPopapShowOrder }
        />
      </div>

      {
        (isOpenAddOrder)
        ? (
          <AddOrder
            addOrder={ addOrder }
            hidePopapAddOrder={ hidePopapAddOrder }
          />
        )
        : null
      }
      {
        (isOpenEditOrder)
        ? (
          <EditOrder
            order={ editValue }
            editOrder={ editOrder }
            hidePopapEditOrder={ hidePopapEditOrder }
          />
        )
        : null
      }
      {
        (isOpenShowOrder)
        ? (
          <ShowOrder
            order={ editValue }
            hidePopapShowOrder={ hidePopapShowOrder }
          />
        )
        : null
      }
    </>
  );
}

export default App;
