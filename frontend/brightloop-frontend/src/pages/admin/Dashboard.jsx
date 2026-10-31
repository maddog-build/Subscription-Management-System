import { ArrowUpRight, CreditCard, Users, Activity, FileText } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import PageHeader from "../../components/common/PageHeader";
import StatusBadge from "../../components/common/StatusBadge";
import { stats, revenueData, transactions } from "../../services/demoData";

const icons = [CreditCard, Activity, Users, FileText];

export default function Dashboard() {
  return <><PageHeader title="Dashboard" description="Here's what's happening with your subscriptions today." action={<button className="secondary-button"><ArrowUpRight size={16}/> Export report</button>}/>
    <section className="stats-grid">{stats.map((s,i)=>{const Icon=icons[i];return <article className="stat-card" key={s.label}><div className="stat-top"><span>{s.label}</span><span className="stat-icon"><Icon size={18}/></span></div><strong>{s.value}</strong><span className={`stat-change ${s.tone}`}>{s.change}</span></article>})}</section>
    <section className="dashboard-grid"><article className="panel chart-panel"><div className="panel-heading"><div><h2>Revenue overview</h2><p>Monthly revenue performance</p></div><select aria-label="Chart period"><option>Last 6 months</option><option>This year</option></select></div><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><BarChart data={revenueData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edf0f5"/><XAxis dataKey="month" axisLine={false} tickLine={false}/><YAxis axisLine={false} tickLine={false}/><Tooltip formatter={(v)=>`₹${v.toLocaleString("en-IN")}`}/><Bar dataKey="revenue" fill="#6558d3" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer></div></article>
    <article className="panel"><div className="panel-heading"><div><h2>Subscription snapshot</h2><p>Current plan distribution</p></div></div><div className="snapshot-number">1,284 <span>active</span></div><div className="progress-row"><span>Professional</span><b>58%</b></div><div className="progress"><i style={{width:"58%"}}/></div><div className="progress-row"><span>Starter</span><b>27%</b></div><div className="progress"><i style={{width:"27%"}}/></div><div className="progress-row"><span>Business</span><b>15%</b></div><div className="progress"><i style={{width:"15%"}}/></div></article></section>
    <section className="panel table-panel"><div className="panel-heading"><div><h2>Recent transactions</h2><p>Latest invoice and payment activity</p></div><a href="/admin/payments">View all</a></div><div className="table-scroll"><table><thead><tr><th>Invoice</th><th>Customer</th><th>Plan</th><th>Amount</th><th>Status</th></tr></thead><tbody>{transactions.map(t=><tr key={t.id}><td className="strong-cell">{t.id}</td><td>{t.customer}</td><td>{t.plan}</td><td>{t.amount}</td><td><StatusBadge status={t.status}/></td></tr>)}</tbody></table></div></section>
  </>;
}
