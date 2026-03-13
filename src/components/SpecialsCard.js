import { MdDeliveryDining } from "react-icons/md";

function SpecialsCard({ title, price, description, imageSrc }) {
	return (
		<div>
			<img src={imageSrc}></img>
			<div className="card-content">
				<div className="title-line">
					<h3>{title}</h3>
					<p>{price}</p>
				</div>
				<p>{description}</p>
				<div className="card-footer">
					<p className="cta">Order Delivery</p>
					<MdDeliveryDining />
				</div>
			</div>
		</div>
	);
}

export default SpecialsCard;
