function Homepage() {
    const token = localStorage.getItem('token');
    return (
        <div>
            <div>{token}</div>
        </div>
    );
}

export default Homepage;
