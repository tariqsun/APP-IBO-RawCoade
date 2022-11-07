import { Navigate } from "react-router-dom";
import Customers from "../Pages/Customers/Customers";
import AddCustomer from "../Pages/Customers/AddCustomer";
import EditCustomer from "../Pages/Customers/EditCustomer";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Plans from "../Pages/Plans/Plans";
import AddPlan from "../Pages/Plans/AddPlan";
import Payments from "../Pages/Payments/Payments";
import PaymentHistory from "../Pages/Payments/PaymentHistory";
import AddPayment from "../Pages/Payments/AddPayment";
import EditPlan from "../Pages/Plans/EditPlan";
import Expense from "../Pages/Expense/Expense";
import AddExpense from "../Pages/Expense/AddExpense";
import EditExpense from "../Pages/Expense/EditExpense";
import ExpenseCategory from "../Pages/Expense/ExpenseCategory/ExpenseCategory";
import AddExpenseCategory from "../Pages/Expense/ExpenseCategory/AddExpenseCategory";
import EditExpenseCategory from "../Pages/Expense/ExpenseCategory/EditExpenseCategory";
import Nas from '../Pages/Nas/Nas'
import NasAdd from '../Pages/Nas/NasAdd'
import NasEdit from '../Pages/Nas/NasEdit'


const routes = [
    {
        path:'/',
        element:<Dashboard />,
        exact:true
    },
    {
        path:'/customers',
        element:<Customers />,
        exact:true
    },
    {
        path:'/customers/add',
        element:<AddCustomer />,
        exact:true
    },
    {
        path:'/customers/edit/:id',
        element:<EditCustomer />,
        exact:true
    },
    {
        path:'/plans',
        element:<Plans />,
        exact:true
    },
    {
        path:'/plans/add',
        element:<AddPlan />,
        exact:true
    },
    {
        path:'/plans/edit/:id',
        element:<EditPlan />,
        exact:true
    },
    {
        path:'/payments',
        element:<Payments />,
        exact:true
    },
    {
        path:'/payments/history',
        element:<PaymentHistory />,
        exact:true
    },
    {
        path:'/payments/add',
        element:<AddPayment />,
        exact:true
    },
    {
        path:'/expense',
        element:<Expense />,
        exact:true
    },
    {
        path:'/expense/add',
        element:<AddExpense />,
        exact:true
    },
    {
        path:'/expense/edit/:id',
        element:<EditExpense />,
        exact:true
    },
    {
        path:'/nas',
        element:<Nas />,
        exact:true
    },
    {
        path:'/nas/add',
        element:<NasAdd />,
        exact:true
    },
    {
        path:'/nas/edit/:id',
        element:<NasEdit />,
        exact:true
    },
    {
        path:'/expense/category',
        element:<ExpenseCategory />,
        exact:true
    },
    {
        path:'/expense/category/add',
        element:<AddExpenseCategory />,
        exact:true
    },
    {
        path:'/expense/category/edit/:id',
        element:<EditExpenseCategory />,
        exact:true
    },
    {
        path:'/login',
        element:<Login />,
        exact:true
    },
    {
        path:'*',
        element:<Navigate to="/" replace />,
        exact:true
    }
];

export default  routes;