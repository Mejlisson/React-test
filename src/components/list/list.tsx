import "./list.scss";

type ListProps = {
	items: string[];
}
const List = ({ items }: ListProps) => {
	return (
		<ul>
		{items.map((items)=> (
		    <li>{items}</li>
			))}
		</ul>
	);
};

export default List;