import "./Tag.css";

const Tag = ({ tags }) => {
    return (
        <div className="accomTagContainer">
            {tags.map((tag) => (
                <span className="accomTag" key={tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default Tag;
