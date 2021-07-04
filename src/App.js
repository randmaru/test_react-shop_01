function App() {
	return (
		<div className="wrapper">
			<header>
				<div className="header__title">
					<object
						type="image/svg+xml"
						data="/img/svg/logotype.svg"
						width="36px"
						height="36px"
					>
						Your browser does not support SVG
					</object>
					<div className="header__text">
						<h3>react test shop 01</h3>
						<p>Лучший цветочный магазин!</p>
					</div>

				</div>
				<ul className="header__bar">
					<li>
						<object
							type="image/svg+xml"
							data="/img/svg/cart.svg"
							width="24px"
							height="24px"
						>
							Your browser does not support SVG
						</object>
						<span>&nbsp;₽</span>
					</li>
					<li>
						<object
							type="image/svg+xml"
							data="/img/svg/account.svg"
							width="24px"
							height="24px"
						>
							Your browser does not support SVG
						</object>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default App;
