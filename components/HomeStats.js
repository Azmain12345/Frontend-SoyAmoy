import {useEffect, useState} from "react";
import axios from "axios";




export default function HomeStats() {
  const [orders,setOrders] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/orders').then(res => {
      setOrders(res.data);
      setIsLoading(false);
    });
  }, []);

  function ordersTotal(orders) {
    let sum = 0;
    orders.forEach(order => {
      const {line_items} = order;
      line_items.forEach(li => {
        const lineSum = li.quantity * li.price_data.unit_amount / 100;
        sum += lineSum;
      });
    });
    console.log({orders});
    return new Intl.NumberFormat('sv-SE').format(sum);
  }
 

  const ordersToday = orders.filter(o =>  new Date(o.createdAt) > (new Date, 24));
  const ordersWeek = orders.filter(o =>  new Date(o.createdAt) > (new Date, 24*7));
  const ordersMonth = orders.filter(o =>  new Date(o.createdAt) > (new Date, 24*30));

  return (
    <div>
      <b><h1>Orders</h1></b>
      <div className="tiles-grid">
        <div className="tile">
          <b><h3 className="tile-header">Today</h3></b>
          <div className="tile-number">{ordersToday.length}</div>
          <div className="tile-desc">{ordersToday.length} orders today</div>
        </div>
        <div className="tile">
          <b><h3 className="tile-header">This week</h3></b>
          <div className="tile-number">{ordersWeek.length}</div>
          <div className="tile-desc">{ordersWeek.length} orders this week</div>
        </div>
        <div className="tile">
          <b><h3 className="tile-header">This month</h3></b>
          <div className="tile-number">{ordersMonth.length}</div>
          <div className="tile-desc">{ordersMonth.length} orders this month</div>
        </div>
      </div>
      <b><h1>Revenue</h1></b>
      <div className="tiles-grid">
        <div className="tile">
          <b><h3 className="tile-header">Today</h3></b>
          <div className="tile-number">£ {ordersTotal(ordersToday)}</div>
          <div className="tile-desc">{ordersToday.length} orders today</div>
        </div>
        <div className="tile">
          <b><h3 className="tile-header">This week</h3></b>
          <div className="tile-number">£ {ordersTotal(ordersWeek)}</div>
          <div className="tile-desc">{ordersWeek.length} orders this week</div>
        </div>
        <div className="tile">
          <b><h3 className="tile-header">This month</h3></b>
          <div className="tile-number">£ {ordersTotal(ordersMonth)}</div>
          <div className="tile-desc">{ordersMonth.length} orders this month</div>
        </div>
      </div>
    </div>
  );
}