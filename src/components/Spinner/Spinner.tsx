
import React from "react";

import Spinner from 'react-bootstrap/Spinner';
import "./Spinner.css";


const Loading: React.FC<any> = ({}) => {
    return (
        <div className="loading">
			<Spinner className='size-loading' animation="border" role="status" variant="primary" size="sm">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
    )
}

export default Loading;