import React, {Component} from 'react';
import Link from 'next/link';
import "./Navbar.scss";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav>
                <div>
                    <Link href="/">
                        <a title="Home Page for the Project">
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a title="About Project">
                            About Project
                        </a>
                    </Link>
                    <mark className="badge">Hello !</mark>
                </div>
            </nav>
        )
    }
}

export default Navbar;