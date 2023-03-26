
import React from "react";

import "./Spinner.css";

import { MDBSpinner } from 'mdb-react-ui-kit';

const Spinner: React.FC<any> = ({}) => {
    return (
        <div className="loading">
			<MDBSpinner color='success' >
				<span className='visually-hidden'>Loading...</span>
			</MDBSpinner>
		</div>
    )
}

export default Spinner;