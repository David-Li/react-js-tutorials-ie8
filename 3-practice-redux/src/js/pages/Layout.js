import React  from "react";
import Menu   from "../components/Menu";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
    render() {
        return <div>
					<Menu location={this.props.location}/>
        			<h1 class="router-path">{this.props.location.pathname}</h1>
        			<div class="content">{this.props.children}</div>
        			<Footer/>
        		</div>;
    }
}