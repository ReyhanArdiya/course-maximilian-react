import CartButton from "../Cart/CartButton";
import CartContext from "../../context/cart";
import mealIMG from "../../assets/meals.jpg";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

const HeaderChild = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
`;

const MainImage = styled.div`
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;

    img {
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
`;

const Header = ({ onCartButtonClick }) => {
	const { total } = useContext(CartContext);
	const [ playBump, setPlayBump ] = useState(false);

	useEffect(() => {
		setPlayBump(true);

		const timer = setTimeout(() => setPlayBump(false), 300);

		return () => clearTimeout(timer);
	}, [ total ]);

	return (
		<>
			<HeaderChild className="header">
				<h1>ReactMeals</h1>
				<CartButton
					onCartButtonClick={onCartButtonClick}
					badge={total}
					playBump={playBump} />
			</HeaderChild>
			<MainImage className="main-image">
				<img src={mealIMG} alt="A table full of delicious meals" />
			</MainImage>
		</>
	);
};

export default Header;