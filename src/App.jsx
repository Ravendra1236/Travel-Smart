import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import "./index.css"
function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => setItems((items) => [...items, item]);

  const handleDeleteItem = (id)=>(setItems(items.filter((item)=>(item.id !== id))))

  const handleToggleItem = (id)=>(setItems(items.map(item=>item.id === id ? {...item , packed : !item.packed}: item) ))

  const handleClearAll = ()=> {const confirmed = window.confirm("Are you sure you want to delete all items ? ") 
    if(confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}


export default App ;