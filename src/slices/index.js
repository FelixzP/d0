import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";

//Ecommerce
import EcommerceReducer from "./ecommerce/reducer";

//Invoice
import InvoiceReducer from "./invoice/reducer";


// Dashboard Ecommerce
import DashboardEcommerceReducer from "./dashboardEcommerce/reducer";

const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Account: AccountReducer,
    ForgetPassword: ForgetPasswordReducer,
    Profile: ProfileReducer,
    Ecommerce: EcommerceReducer,
    Invoice: InvoiceReducer,
    DashboardEcommerce: DashboardEcommerceReducer,
});

export default rootReducer;