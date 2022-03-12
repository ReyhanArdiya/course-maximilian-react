import styled from "styled-components";

const Container = styled.button`
    & {
      cursor: pointer;
      font: inherit;
      border: none;
      background-color: #4d1601;
      color: white;
      padding: 0.75rem 3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 25px;
      font-weight: bold;
    }

    &:hover,
    &:active {
      background-color: #2c0d00;
    }

    .icon {
      width: 1.35rem;
      height: 1.35rem;
      margin-right: 0.5rem;
    }

    .badge {
      background-color: #b94517;
      padding: 0.25rem 1rem;
      border-radius: 25px;
      margin-left: 1rem;
      font-weight: bold;
    }

    &:hover .badge,
    &:active .badge {
      background-color: #92320c;
    }

    .bump {
      animation: bump 300ms ease-out;
    }

    @keyframes bump {
      0% {
        transform: scale(1);
      }
      10% {
        transform: scale(0.9);
      }
      30% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.15);
      }
      100% {
        transform: scale(1);
      }
    }
`;

const CartIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
		</svg>
	);
};

const CartButton = ({ onCartButtonClick, badge = 0 }) => {
	return (
		<Container onClick={onCartButtonClick}>
			<span className="icon"><CartIcon/></span>
			<span>Your Cart</span>
			<span className="badge">{badge}</span>
		</Container>
	);
};

export default CartButton;