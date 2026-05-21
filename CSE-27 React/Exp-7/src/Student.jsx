export default function StudentCard(props) {
    return (
        <div className="student-card">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Marks: {props.marks}</p>
        </div>
    );
}