import { Outlet} from "react-router-dom";
import Header from "../src/components/Header";

const Layout = ({ onSearch }) => {
    return (
        <div className="layout">
            <Header onSearch={onSearch} />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;