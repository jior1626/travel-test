import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface HotelCardInterface {
	title: string;
	description: string;
}

const HotelCard: React.FC<HotelCardInterface> = ({ title, description }) => {

	return (
		<Card>
			<Card.Img variant="top" width={100} height={200} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/138012329.jpg?k=132b65881a38874a402f206cb7c509f881e4968ded2d832e895bee6e051bff09&o=&hp=1" />
			<Card.Body>
				<Card.Title>{title} </Card.Title>
				<Card.Text>
					{description}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HotelCard;