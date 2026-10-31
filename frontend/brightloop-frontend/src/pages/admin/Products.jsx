import { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";

export default function Products() {
  const [items,setItems]=useState([{id:1,name:"Cloud Workspace",type:"Digital service",price:"₹1,499"},{id:2,name:"Analytics Suite",type:"Software",price:"₹2,499"}]);
  const [name,setName]=useState("");
  return <><PageHeader title="Products" description="Create and manage the products offered to customers."/><section className="panel form-panel"><h2>Add a product</h2><form className="inline-form" onSubmit={e=>{e.preventDefault();if(name.trim()){setItems([...items,{id:Date.now(),name,type:"Software",price:"Set in plan"}]);setName("");}}}><input value={name} onChange={e=>setName(e.target.value)} placeholder="Product name" required/><button className="primary-button">Add product</button></form></section><section className="panel table-panel"><div className="panel-heading"><h2>Product catalogue</h2><span className="muted">{items.length} products</span></div>{items.length?<table><thead><tr><th>Product</th><th>Type</th><th>Starting price</th></tr></thead><tbody>{items.map(x=><tr key={x.id}><td className="strong-cell">{x.name}</td><td>{x.type}</td><td>{x.price}</td></tr>)}</tbody></table>:<EmptyState/>}</section></>;
}
