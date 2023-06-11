import CustomerItem from '../CustomerItem/CustomerItem'
import "./CustomerList.css"


function CustomerList({customers,setCustomers}) {
  
const handleDelete = (item) =>{
    // her dönen customerin idsiyle gönderdiğimiz itemin idsi eşitse tıkladığım itemi sil
    setCustomers(customers.filter((customer) => customer.id !== item.id))
}
  return (
    <ul className='customer-list'>
       {/* HTMLin içerisinde JS döndürmek istiyorsak map ile döndürürz */}
 
        {customers.map((customer)=>(
            // componentler arası veri aktarımını bu şekilde yaparız customer={customer}
            //componentlerin daha performanslı çalışabilmesi için. Hangi component hangi dataya ait olduğunu bilebilmesi için
            <CustomerItem  customer={customer} 
            key={customer.id}
            handleDelete={handleDelete}/> 
        ))}
      
    </ul>
  )
}

export default CustomerList


 
