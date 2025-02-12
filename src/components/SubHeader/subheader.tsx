type SubHeaderProps = {
    children: React.ReactNode;
};

const subHeader =({children}: SubHeaderProps) => {
    return <p>{children}</p>; //inte type säker då man inte kan styra vad denna ska innehålla exakt
};

export default subHeader