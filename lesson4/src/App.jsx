import Avatar from "./components/avatar"
const App = () => {
    const user = {
        name: "Nguyen Cong Toan",
        role: "Students"
    }
    return <>
        { }
        <h1>Hello</h1>
        <h1>{user.name}</h1>
        <Avatar showInfo={() => console.log(user.name)} />
    </>
}

export default App