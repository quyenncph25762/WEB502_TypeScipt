const Avatar = (props) => {
    let { name, user, showInfo } = props;
    name = "Nguyen Cong Quyen";
    // console.log(name);
    return <div>
        {/* <h2>{name}</h2> */}
        <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg" />
        <button onClick={showInfo}>Click</button>
    </div>
}

export default Avatar