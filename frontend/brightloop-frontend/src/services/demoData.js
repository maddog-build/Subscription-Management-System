export const stats = [
  { label: "Total revenue", value: "₹2,48,500", change: "+12.8%", tone: "green" },
  { label: "Active subscriptions", value: "1,284", change: "+8.2%", tone: "green" },
  { label: "Total customers", value: "946", change: "+5.4%", tone: "green" },
  { label: "Pending invoices", value: "38", change: "Needs attention", tone: "orange" },
];

export const revenueData = [
  { month: "May", revenue: 32000 }, { month: "Jun", revenue: 41000 },
  { month: "Jul", revenue: 38000 }, { month: "Aug", revenue: 52000 },
  { month: "Sep", revenue: 47000 }, { month: "Oct", revenue: 68500 },
];

export const transactions = [
  { id: "INV-1048", customer: "Aarav Nair", plan: "Pro Monthly", amount: "₹2,499", status: "Paid" },
  { id: "INV-1047", customer: "Maya Thomas", plan: "Starter Yearly", amount: "₹5,999", status: "Pending" },
  { id: "INV-1046", customer: "Ishan Menon", plan: "Business Monthly", amount: "₹4,999", status: "Paid" },
  { id: "INV-1045", customer: "Diya Shah", plan: "Pro Monthly", amount: "₹2,499", status: "Overdue" },
];

export const plans = [
  { id: 1, name: "Starter", description: "For individuals getting started", price: 499, cycle: "month", features: ["Core features", "Email support", "1 user"] },
  { id: 2, name: "Professional", description: "For growing teams", price: 1499, cycle: "month", features: ["All Starter features", "Priority support", "5 users"] },
  { id: 3, name: "Business", description: "For established businesses", price: 3999, cycle: "month", features: ["All Pro features", "Advanced reports", "Unlimited users"] },
];
