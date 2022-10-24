import React from 'react'
import SideMenuItem from '../UI/SideMenuItem'
import { IoIosAnalytics } from 'react-icons/io'
import { ImUsers } from 'react-icons/im'
import { AiFillDollarCircle } from 'react-icons/ai'
import { FiPackage, FiDollarSign } from 'react-icons/fi'
import { FaFunnelDollar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'

function Sidebar() {
  return (
        <aside className="w-64 fixed top-0 bottom-0 drop-shadow-2xl" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <Link to="/" class="flex items-center pl-2.5 mb-5">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <ul className="space-y-2 h-screen">
                    <SideMenuItem
                        label="Dashboard"
                        route="/"
                        icon={<IoIosAnalytics />}
                    />
                    <SideMenuItem
                        label="Customers"
                        icon={<ImUsers />}
                    >
                            <SideMenuItem
                                label="Add Customer"
                                route="/customers/add"
                                icon={<AiOutlineUserAdd />}
                            />

                            <SideMenuItem
                                label="Customers"
                                route="/customers"
                                icon={<HiUserGroup />}
                            />

                    </SideMenuItem>
                    <SideMenuItem
                        label="Plans"
                        route="/plans"
                        icon={<FiPackage />}
                        >
                        <SideMenuItem
                            label="Add Plan"
                            route="/plans/add"
                            icon={<FiPackage />}
                        />    
                        <SideMenuItem
                            label="Plans"
                            route="/plans"
                            icon={<FiPackage />}
                            />

                    </SideMenuItem>

                   <SideMenuItem
                        label="Payments"
                        icon={<AiFillDollarCircle />}
                        >

                        <SideMenuItem
                            label="Add Payment"
                            route="/payments/add"
                            icon={<FiDollarSign />}
                            />
                        <SideMenuItem
                            label="Payments"
                            route="/payments"
                            icon={<FiDollarSign />}
                            />

                        <SideMenuItem
                            label="Payment History"
                            route="/payments/history"
                            icon={<FaFunnelDollar />}
                            />
                    </SideMenuItem>

                    <SideMenuItem
                        label="Expense"
                        icon={<FiPackage />}
                        >
                            <SideMenuItem
                            label="Expense Category"
                            icon={<AiFillDollarCircle />}
                            >

                                <SideMenuItem
                                    label="Add Category"
                                    route="/expense/category/add"
                                    icon={<FiDollarSign />}
                                    />
                                <SideMenuItem
                                    label="Categories"
                                    route="/expense/category"
                                    icon={<FiDollarSign />}
                                    />

                            </SideMenuItem> 
                            <SideMenuItem
                                label="Expense"
                                icon={<AiFillDollarCircle />}
                                >

                                <SideMenuItem
                                    label="Add Expense"
                                    route="/expense/add"
                                    icon={<FiDollarSign />}
                                    />
                                <SideMenuItem
                                    label="Expense"
                                    route="/expense"
                                    icon={<FiDollarSign />}
                                    />

                            </SideMenuItem>

                    </SideMenuItem>
                </ul>
            </div>
        </aside>

  )
}

export default Sidebar