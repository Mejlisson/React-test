import "./LamaButton.scss";

type LlamaButtonProps = {
	title: string;
	hasIcon: boolean;
};

const LlamaButton = ({ title, hasIcon }: LlamaButtonProps) => {
	// if (hasIcon) return <button className="LlamaButton">🦙 {title}</button>;
	// else return <button className="LlamaButton">{title}</button>;

	return (
		<button className="LlamaButton">
			{/* {hasIcon ? <>🦙 </> : ""} */}
			{hasIcon && "🦙 "}
			{title}
		</button>
	);
};

export default LlamaButton;