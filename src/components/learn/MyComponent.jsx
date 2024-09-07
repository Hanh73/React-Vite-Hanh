import './style.css';

const MyComponent = () => {
    // const Hanh1 = 'Hanh1';
    const Hanh1 = {
        Name: "Hanh1",
        Age: 25
    }
    return (
        <>
            <div> {JSON.stringify(Hanh1)} & study React updated </div>
            <div>{console.log("Hanh Check")}</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >child 1</div>
        </>

    );
}
export default MyComponent;