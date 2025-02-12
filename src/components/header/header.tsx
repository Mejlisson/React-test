import "./Header.scss";

type HeaderProps = {
    title: string;
};

const Header = ({ title } : HeaderProps) => {
	return <h1 className="Header">{title}</h1>; //(type säkerhet) Då gör vi så
};

export default Header;