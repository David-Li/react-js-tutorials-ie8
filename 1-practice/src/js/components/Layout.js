import React   from "react";
import Header  from "./Header";
import Footer  from "./Footer";
import HelloWorld from "./HelloWorld";

class Layout extends React.Component {
    render() {
        return <div>
        			<Header />
        			<HelloWorld />
        			<Footer />
        		</div>;
    }
}

export default Layout;
